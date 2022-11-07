/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import SignUp from '../../components/sign-up/SignUp';
import SignIn from '../../components/sign-in/SignIn';
import './Auth.scss'

const Auth = () => {
    return (
        <div className='authentication-container'>
            <SignIn />
            <SignUp />
        </div>

    )
}

export default Auth