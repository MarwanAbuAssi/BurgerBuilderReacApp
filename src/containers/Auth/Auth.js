import React, {Component} from 'react';
import classes from './Auth.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button';
import * as action from '../../store/actions/index'
import {connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner'
import {Redirect} from 'react-router-dom'
class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        isSignUp: false
    };

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state.controls.email.value + "------" + this.state.controls.password.value);
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
    }
    inputChangedHandler = (event, controlName) => {
        const updateControles = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName]),
                touched: true
            }
        }
        this.setState({controls: updateControles})
    };
    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignUp: !this.state.isSignUp};
        });
        console.log(this.state.isSignUp);
    };

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = (
            <div
                // onSubmit={this.orderHandler}
            >
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
            </div>
        );
        let errorMessage=null;
        if(this.props.error){
        errorMessage= <p style={{color :'red'}}>{this.props.error.message}</p>
        }

        if (this.props.loading) {
            form = <Spinner/>
        }
        let authRedirect =null;
        if(this.props.isAuth){
            authRedirect= <Redirect to='/'/>
        }

        return (
            <div className={classes.Auth}>
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="Success">SUBMIT</Button>
                </form>
                <Button btnType="Danger"

                        clicked={this.switchAuthModeHandler}
                >SWITCH TO {this.state.isSignUp ? 'SIGNIN' : 'SIGNUP'}</Button>
                {/*<p>{this.props.loading? 'dsdsd':'noo'}...</p>*/}
                {errorMessage}
                {authRedirect}
                </div>
        )
    }
}

const mapDispatchToProps = dispatch => {

    return {
        onAuth: (email, password, isSignUp) => dispatch(action.auth(email, password, isSignUp))

    }
};
const mapStateToProps = state => {

    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token !== null
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);