import axios from 'axios';
import io from 'socket.io-client';
import { stat } from 'fs';
const socket = io('ws://localhost:9093');

//获取聊天列表
const MSG_LIST = 'MSG_LIST';
//读取信息
const MSG_RECV = 'MSG_RECV';
//标识已读
const MSG_READ = 'MSG_READ';

const initState = {
    chatmsg:[],
    users:{},
    unread:0
}

export function chat(state=initState, action){
    switch(action.type){
        case MSG_LIST:
            return {...state,users:action.payload.users,chatmsg:action.payload.msgs,unread:action.payload.msgs.filter(v=>!v.read && v.to===action.payload.userid).length}
        case MSG_RECV:
            const n = action.payload.msg.to === action.payload.userid ? 1 : 0;
            return {...state,chatmsg:[...state.chatmsg,action.payload.msg],unread:state.unread+n}
        case MSG_READ:
            return {...state, chatmsg:state.chatmsg.map(v=>({...v,read:true})), unread:state.unread-action.payload.num}
        default:
            return state
    }
}

function msgList(msgs,users,userid){
    // console.log(msgs)
    return {
        type:MSG_LIST,
        payload:{msgs,users,userid}
    }
}
function msgRecv(msg,userid){
    return{
        type:MSG_RECV,
        payload:{msg,userid}
    }
}
function msgRead({from,userid,num}){
    return { 
        type:MSG_READ,
        payload:{from,userid,num}
    }
}
export function recvMsg(){
    return (dispatch, getState)=>{
        socket.on('recvmsg', function(data){
            // console.log(data);
            const userid = getState().user._id;
            dispatch(msgRecv(data,userid))
        })
    }
}

export function sendMsg({from,to,msg,create_time}){
    return dispatch=>{
        socket.emit('sendmsg',{from,to,msg,create_time})
    }
}

export function getMsgList(){
    return (dispatch,getState)=>{
        axios.get('/user/getmsglist')
            .then(res=>{
                if(res.status===200 && res.data.code===0){
                    const userid = getState().user._id;
                    // console.log('getState:',getState())
                    dispatch(msgList(res.data.msgs, res.data.users, userid))
                }
            })
    }
}
export function readMsg(from){
    return (dispatch,getState)=>{
        axios.post('/user/readmsg',{from})
            .then(res=>{
                const userid = getState().user._id;
                if(res.status===200 && res.data.code===0){
                    const num = res.data.num;
                    dispatch(msgRead({userid, from, num}))
                }
            })
    }
}