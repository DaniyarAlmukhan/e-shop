/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import SignUp from '../../components/sign-up/SignUp';
import SignIn from '../../components/sign-in/SignIn';
import { AuthenticationContainer } from './styles';

const Auth = () => {
    return (
        <AuthenticationContainer>
            <SignIn />
            <SignUp />
        </AuthenticationContainer>

    )
}

export default Auth