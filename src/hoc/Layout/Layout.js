import React, { Component } from 'react';

import Auxe from '../Auxe/Auxe';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux'
class Layout extends Component {
    x= false;
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }
    
    render () {

    if(localStorage.getItem('token')){
        this.x= true;
    }
        return (
            <Auxe>
                <Toolbar
                    isAuth={this.x}
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxe>
        )
    }
}

const mapStateToProps = state => {
    return {

        isAuth : state.auth.token !== null
    };
};
export default connect(mapStateToProps)(Layout);