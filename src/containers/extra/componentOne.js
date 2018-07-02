import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import Bar from '../../components/Navigation/Toolbar/testToolbar'
class componentOne extends Component{
    state={
        list:[]
    };
    render(){       // console.log(this.props.location.pathname);

//         const previouslyVisitedPaths = localStorage.getItem("visitedPaths")
//
//         let paths;
//         if (previouslyVisitedPaths === null) { // First write to your localStorage
//             paths = this.props.location.pathname
//         } else {
//             paths += `,${this.props.location.pathname}` // append new path to it
//         }
//
//         localStorage.setItem("visitedPaths", paths);
//
// console.log(    localStorage.setItem("visitedPaths", paths))
        let newList = [...this.state.list]
        this.state.list.push(this.props.location.pathname);

        console.log(this.props)
        // console.log(this.state.list);
        const show=true;
        return(
            <div>
            <Bar loc={this.props.location} name="component One" show={show}/>
                <h1>Component One</h1>
            </div>
        );
    }
}
export default componentOne;