import React from 'react'

export default function YForm(Comp){
    return class WrapperComp extends React.Component{
        constructor(props){
            super(props);
            this.state={

            };
            this.handleChange = this.handleChange.bind(this)
        }
        handleChange(key,val){
            console.log(key,val)
            this.setState({
                [key]:val
            })
        }
        render(){
            return <Comp
             {...this.props}
             handleChange={this.handleChange}
             state={this.state}
             ></Comp>
        }
    }
}