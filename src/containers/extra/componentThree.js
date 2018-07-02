import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import Bar from '../../components/Navigation/Toolbar/testToolbar'
class componentThree extends Component{
    render(){
        // console.log(this.props.location.pathname)

        const show=true;
        return(
            <div>
                <Bar loc={this.props.location} name="component Three"  show={show}/>

                <h1>Component Three</h1>


            </div>
        );
    }
}
export default componentThree;