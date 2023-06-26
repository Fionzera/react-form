import { useState } from 'react';

import './LoginPage.css'
import Input from '../components/Input';

const LoginPage = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState(); 

    const onChangeEmail = (event) =>{
        setEmail(event.target.value);
    }

    const onChangePassword = (event) =>{
        const passwordValue = event.target.value;
        setPassword(passwordValue);
        if (passwordValue.length >= 6){
            setErrorMessage();
        }else{
            setErrorMessage("A senha precisa conter no mínimo 6 dígitos!");
        }
    }

    const onSubmit = () =>{

    }

    return (
        <div className='container'>
            <div className='formContainer'>
                <Input label='E-mail' inputName="emailInput" value={email} onChange={onChangeEmail}/>
                <Input label='Password' inputName="passwordInput" errorMessage={errorMessage} value={password} onChange={onChangePassword}/>
                <button onClick={onSubmit}>Login</button>
            </div>
        </div>
    );
}

export default LoginPage;