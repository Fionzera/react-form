import { useState } from 'react';
import './CreateUser.css';
import axios from 'axios';

const CreateUser = () => {
    const[title, setTitle] = useState();
    const [body, setBody] = useState();

    const onChangeTitle = (event) =>{
        const inputValue = event.target.value;
        setTitle(inputValue);
    }

    const onChangeBody = (event) =>{
        const inputValue = event.target.value;
        setBody(inputValue);
    }

    const handleSubmit = async () =>{
        try{
            const postToSubmit = {
                userId: 1,
                title: title,
                body: body
            }
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts');
        }catch(error){
            console.log(error);
        }
        
    }

    return (
        <div className='container'>
            <label for="title">Título</label>
            <input id='title' type='text' onChange={onChangeTitle} value={title}/>

            <label for="body">Conteúdo</label>
            <input id='body' type='text' onChange={onChangeTitle} value={body}/>

            <button onClick={handleSubmit}>Cadastrar Post</button>
        </div>
    );
}

export default CreateUser;