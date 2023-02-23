import React from 'react';
import { useState } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase';
import FormInput from '../form-input/FormInput';
import { Button, BUTTON_TYPE_CLASSES } from '../button/Button';
import { SignInContainer } from './styles';

const defaultFormFields = {

    email: '',
    password: '',

}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password, } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields();
        } catch (e) {
            console.error(e);
        }
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />

                <div className="buttons-container">
                    <Button type="submit" >Sign In</Button>
                    <Button
                        type="submit"
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        onClick={signInWithGoogle}
                    >Google Sign In</Button>
                </div>

            </form>
        </SignInContainer>
    )
}

export default SignIn;