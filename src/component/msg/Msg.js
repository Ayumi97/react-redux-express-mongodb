import React from 'react';
import {connect} from 'react-redux';
import {List, Badge} from 'antd-mobile';


@connect(
    state=>state
)
class Msg extends React.Component{

    getLast(arr){
        return arr[arr.length-1];
    }

    render(){
        // if(!this.props.chat.chatmsg) {
        //     return [];
        // }
        // console.log(this.props)
        // 按照聊天用户分组，根据chatid
        const msgGroup = {};
        this.props.chat.chatmsg.forEach(v=>{
            msgGroup[v.chatid] = msgGroup[v.chatid] || [];
            msgGroup[v.chatid].push(v);
        })
        // console.log(msgGroup)
        const chatList = Object.values(msgGroup);
        const Item = List.Item;
        const Brief = Item.Brief;
        const userId = this.props.user._id;
        return(
            <div>
                    {chatList.map(v=>{
                        const lastItem = this.getLast(v);
                        const targetId = v[0].from===userId ? v[0].to : v[0].from; 
                        const name = this.props.chat.users[targetId] ? this.props.chat.users[targetId].name : '';
                        const avatar = this.props.chat.users[targetId] ? this.props.chat.users[targetId].avatar : '';
                        const unreadNum = v.filter(v=>!v.read && v.to===userId).length;
                        return (
                            <List key={lastItem._id}>
                                <Item                                    
                                    extra={<Badge text={unreadNum}></Badge>}
                                    thumb={require(`../img/${avatar}.png`)}
                                >
                                    {lastItem.content}
                                    <Brief>{name}</Brief>
                                </Item>
                            </List>
                            
                        )
                        })}
            </div>
        )
    }
}
export default Msg;