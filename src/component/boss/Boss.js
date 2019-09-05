import React from 'react';
import {connect} from 'react-redux';
import { Card, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import {getUserList}  from '../../redux/chatuser.redux';


@connect(
    state=>state.chatuser,
    {getUserList}
)
class Boss extends React.Component{
    
    componentDidMount(){
       this.props.getUserList('genius')

    }
   
    render(){
        return(
            <WingBlank>
                <WhiteSpace></WhiteSpace>
                {this.props.userlist && this.props.userlist.map(v=>(
                    v.avatar ? (<Card key={v._id}>
                        <Card.Header
                            title={v.user}
                            thumb={require(`../img/${v.avatar}.png`)}
                            extra={<span>{v.title}</span>}
                        ></Card.Header>
                        <Card.Body>
                            {v.desc.split('\n').map(v=>(
                                <div key = {v}>{v}</div>
                            ))}
                        </Card.Body>
                        
                    </Card>
                    ) : null
                ))}
            </WingBlank>
        )
    }
}

export default Boss;