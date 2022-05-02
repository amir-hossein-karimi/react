import React from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from "../../redux/auth/actions"

const Login = () => {
    const dispatch = useDispatch()
    const login = () => {
        dispatch(setAuth('auth'))
    }
    return (
        <div>
            <button onClick={login} >login</button>
        </div>
    );
};

export default Login;