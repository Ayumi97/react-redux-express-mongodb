
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

//reducer
export function auth(state={isAuth:false, user:'lili'}, action) {
    console.log(state,action)
    switch(action.type){
        case LOGIN:
            return state = {...state, isAuth:true}
        case LOGOUT:
            return state = {...state, isAuth:false}
        default:
            return state
    }
}

//actionCreater
export function login() {
    return {type:LOGIN}
}
export function logout() {
    return {type:LOGOUT}
}
