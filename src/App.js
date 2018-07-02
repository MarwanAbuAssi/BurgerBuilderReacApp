import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Logout from './containers/Auth/Logout/Logout'
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import ComponentOne from './containers/extra/componentOne'
import ComponentTwo from './containers/extra/componentTwo'
import ComponentThree from './containers/extra/componentThree'
import Home from './containers/extra/home'
import {browserHistory} from 'react-router';
import {NavLink} from 'react-router-dom';

class App extends Component {

// Get the current location.


    state = {
        list: []
    };

    render() {
        alert("hiii")
        //localStorage.removeItem('visitedPaths')
//       browserHistory.listen( location =>  {
// console.log(location.pathname);
//           const previouslyVisitedPaths = localStorage.getItem("visitedPaths")
//           let paths;
//           if (previouslyVisitedPaths === null) { // First write to your localStorage
//               paths = location
//           } else {
//               paths += `,${location}` // append new path to it
//           }
//
//           localStorage.setItem("visitedPaths", paths)
//       });
        // localStorage.getItem("visitedPaths").split(',').map(data =>{
        //    // console.log("---"+data);
        // })
        return (
            <div>

                <Layout>
                    <NavLink to="/one">one</NavLink><br/>
                    <NavLink to="/two">two</NavLink><br/>
                    <NavLink to="/three">Three</NavLink><br/>
                    <NavLink to="/home">home</NavLink>
                    <Switch>
                        <Route path="/one" component={ComponentOne}/>
                        <Route path="/two" component={ComponentTwo}/>
                        <Route path="/three" component={ComponentThree}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/checkout" component={Checkout}/>
                        <Route path="/orders" component={Orders}/>
                        <Route path="/auth" component={Auth}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/" exact component={BurgerBuilder}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
