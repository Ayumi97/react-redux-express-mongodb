import React from 'react';
import { Grid, List } from 'antd-mobile';

class AvatarSelector extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        const avatarList = 'face016,face072,face100,face126,face131,face139,face143,face151,face169,face181,face187,face188'
                            .split(',')
                            .map(v=>({
                                icon:require(`../img/${v}.gif`),
                                text:v
                            }));
        const gridHeader = this.state.icon
                            ? (<div>
                                <span>已选择头像</span>
                                <img style={{width:20}} src={this.state.icon} alt='' />
                            </div>)
                            : <div>'请选择头像'</div>
        return(
            <div>
                <List renderHeader={()=>gridHeader}>
                    <Grid 
                        data={avatarList} 
                        columnNum={4}
                        onClick={ele=>{
                            this.setState(ele)
                            this.props.selectAvatar(ele.text)
                        }}
                    />
                </List>
                
                头像选择
            </div>
        )
    }
}

export default AvatarSelector;