import React from 'react';

class Chat extends React.Component{
    


    render(){
        return(
            <div>
                chat with user:{this.props.match.params.user}
            </div>
        )
    }
}

export default Chat;