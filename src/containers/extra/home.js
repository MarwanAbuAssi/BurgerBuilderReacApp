import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import Bar from '../../components/Navigation/Toolbar/testToolbar'
class home extends Component{
    render(){
        // console.log(this.props.location.pathname)

        const show=false;
        return(
            <div>
                <Bar/>

                <h1>Home</h1>


            </div>
        );
    }
}
export default home;