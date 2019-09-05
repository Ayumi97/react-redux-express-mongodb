import React from 'react';
import { Grid, List } from 'antd-mobile';
import PropTypes from 'prop-types';

class AvatarSelector extends React.Component{
    static propTypes = {
        selectAvatar:PropTypes.func.isRequired
    }
    constructor(props){
        super(props);
        this.state = {
            icon:'',
            text:''
        }
    }

    render(){
        const avatarList = 'woman1,woman2,woman3,woman4,woman6,woman7,man1,man2,man3,man4,man5,man6,man7,man8,man11,man12,man13,man14,man15,man16'
                            .split(',')
                            .map(v=>({
                                icon:require(`../img/${v}.png`),
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
                        columnNum={5}
                        onClick={elm=>{
                            this.setState(elm)
                            this.props.selectAvatar(elm.text)
                        }}
                    />
                </List>
                
                头像选择
            </div>
        )
    }
}

export default AvatarSelector;