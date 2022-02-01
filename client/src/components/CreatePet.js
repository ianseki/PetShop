import React, { useState } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import Form from './Form';

const CreatePet = (props) => 
{
    const [errors, setErrors] = useState({});
    
    const [newPet, setNewPet] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })

    const newHandler = (event) => 
    {
        event.preventDefault();

        axios.post('http://localhost:8000/api/pets',
        newPet)
        .then ( (response) =>
            {
                console.log(response);
                console.log(response.data);
                
                setNewPet (
                    {
                        name: "",
                        type: "",
                        description: "",
                        skill1: "",
                        skill2: "",
                        skill3: ""
                    })
                
                navigate("/");
            })
        .catch ( (error) => 
            {
                console.log(error);
                setErrors(error.response.data.errors);
            });
    }

    return (
        <div>
            <header>
                <h1>Pet Shelter</h1>
                <Link to={"/"}>Home</Link>
            </header>
            <h3>Know a pet needing a new home?</h3>
            
            <Form pet={newPet} setPet={setNewPet} submitHandler={newHandler} errors={errors}/>

        </div>
    )
}

export default CreatePet;