import React, { useState } from 'react';
import '../App.css'

const UserForm = (props) => {

    // Form input states
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Errors
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState({charLength: '', match: ''});

    const createUser = (e) => {
       
        e.preventDefault();

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);

        if(e.target.value.length === 0)
            setFirstNameError('')
        else if(e.target.value.length < 2)
            setFirstNameError('First name must be at least 2 characters');
        else
            setFirstNameError('');

    }

    const handleLastName = (e) => {
        setLastName(e.target.value);

        if(e.target.value.length === 0)
            setLastNameError('')
        else if(e.target.value.length < 2)
            setLastNameError('Last name must be at least 2 characters');
        else
            setLastNameError('');
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)

        if(e.target.value.length === 0)
            setEmailError('')
        else if(e.target.value.length < 5)
            setEmailError('Email must be at least 5 characters');
        else
            setEmailError('');
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);

        if(e.target.value.length === 0)
            setPasswordError('')
        else if(e.target.value.length < 8)
            setPasswordError('Password must be at least 8 characters');
        else
            setPasswordError('');
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);

        if(e.target.value.length === 0)
            return setConfirmPasswordError('')

        if(e.target.value.length < 8)
            setConfirmPasswordError(prevState => {
                    return {...prevState, charLength: 'Password must be at least 8 characters'}
            });
        else
            setConfirmPasswordError(prevState => {
                return {...prevState, charLength: ''}
            });
        if(e.target.value !== password)
            setConfirmPasswordError( prevState => {
                return {...prevState, match: 'Passwords must match'}
            });
        else
            setConfirmPasswordError( prevState => {
                return {...prevState, match: ''}
            });
    }

    return(
        <div>

            <form onSubmit={createUser}>

                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={ handleFirstName }></input>
                    {
                        firstNameError ? <p className='error'>{ firstNameError }</p> : ''
                    }
                </div>

                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={ handleLastName }></input>
                    {
                        lastNameError ? <p className='error'>{ lastNameError }</p> : ''
                    }
                </div>

                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={ handleEmail }></input>
                    {
                        emailError ? <p className='error'>{ emailError }</p> : ''
                    }
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={ handlePassword }></input>
                    {
                        passwordError ? <p className='error'>{ passwordError }</p> : ''
                    }
                </div>

                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={ handleConfirmPassword }></input>
                    
                    { confirmPasswordError ?
                        <div className='error'>
                            <p>{ confirmPasswordError.charLength }</p>
                            <p>{ confirmPasswordError.match }</p>
                        </div>
                        : ''
                    }
                    
                </div>

                <input type="submit" value="Create User" />

            </form>

            <div className='UserInfo'>
                <h3>Your Form Data</h3>

                <p><label>First Name:</label> {firstName}</p>
                <p><label>Last Name:</label> {lastName}</p>
                <p><label>Email:</label> {email}</p>
                <p><label>Password:</label> {password}</p>
                <p><label>Confirm Password:</label> {confirmPassword}</p>
            </div>

        </div>
    )

}

export default UserForm;