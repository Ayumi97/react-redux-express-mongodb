import React from 'react';
import axios from 'axios';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

class Boss extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        axios.get('/user/list?type=genius')
            .then(res=>{
                console.log(res)
                if(res.status === 200 && res.data.code===0){
                    this.setState({data:res.data.data})
                }
            })
    }
    render(){
        // console.log(this.state.data)
        return(
            <WingBlank>
                <WhiteSpace></WhiteSpace>
                {this.state.data.map(v=>(
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
                    </Card>) : null
                ))}
            </WingBlank>
        )
    }
}

export default Boss;