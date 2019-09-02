import React from 'react';
import {connect} from 'react-redux';
import { addGun, removeGun, addGunAsync } from './index.redux';



const mapStatetoProps = (state) => {
    return {num:state.counter}
}
const actionCreators = { addGun, removeGun, addGunAsync };
// App = connect(mapStatetoProps, actionCreators)(App);
@connect(mapStatetoProps, actionCreators)
class App extends React.Component {
    constructor(props) {
        super(props);
        
    }
   
    render(){
      
        return(
            <div>
                <h1>现在有机枪{this.props.num}</h1>
                <button onClick={this.props.addGun}>申请武器</button>
                <button onClick={this.props.removeGun}>回收武器</button>
                <button onClick={this.props.addGunAsync}>拖两天再给</button>
            </div>
        )
    }
}

export default App;