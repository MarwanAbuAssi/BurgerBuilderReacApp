import * as typeAction from './actionTypes';
import axios from 'axios'

export const authStart = () => {
    return {
        type: typeAction.AUTH_START
    }

};

export const authSuccess = (token, userId) => {
    return {
        type: typeAction.AUTH_SUCCESS,
        token: token,
        userId: userId
    }

};
export const authFail = (error) => {
    return {
        type: typeAction.AUTH_FAIL,
        error: error
    }

};
export const authLogout = () => {
    return {
        type: typeAction.AUTH_LOGOUT,
    }

};
export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout())
        }, expirationTime * 1000)
    }

};
export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyApb5HtbB2wmGsn9Trpn-2QRqlhdGT2HQA';
        if (!isSignUp) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyApb5HtbB2wmGsn9Trpn-2QRqlhdGT2HQA';
        }
        axios.post(url, authData)
            .then(
                response => {
                    localStorage.setItem('token',response.data.idToken);
                    console.log(response);
                    dispatch(authSuccess(response.data.idToken, response.data.localId));
                    dispatch(checkAuthTimeout(response.data.expiresIn))
                }
            )
            .catch(error => {
                    console.log(error);
                    dispatch(authFail(error.response.data.error));
                }
            )
    }

};