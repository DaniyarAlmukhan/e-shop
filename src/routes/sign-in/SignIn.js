/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import SignUp from '../../components/sign-up/SignUp';

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <>
            <div>SignIn</div>
            <button onClick={logGoogleUser}>Sign In</button>
            <SignUp />
        </>

    )
}

export default SignIn