import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import Bar from '../../components/Navigation/Toolbar/testToolbar'
class componentTwo extends Component{
    render(){
       // console.log(this.props.location.pathname)

const show=true;
        return(
            <div>
                <Bar loc={this.props.location} name="component Two" show={show}/>
                <h1>Component Two</h1>
            </div>
        );
    }
}
export default componentTwo;