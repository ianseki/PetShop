import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../components/Form';
import { Link, navigate } from '@reach/router';

const UpdatePet = (props) => 
{
    const {_id} = props;

    const [pet, setPet] = useState({});

    const [errors, setErrors] = useState({});
    
    const [updatedPet, setUpdatedPet] = useState({
        title: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })

    useEffect( () =>
    {
        axios.get(`http://localhost:8000/api/pets/${_id}`)
            .then( (response) =>
            {
                console.log(response);
                console.log(response.data);
                setPet(response.data);
            })
            .catch( (error) =>
            {
                console.log(error)
            });

    }, [])

    const updateHandler = (event) => 
    {
        event.preventDefault();

        axios.put(`http://localhost:8000/api/pets/${_id}`,
        updatedPet)
        .then ( (response) =>
            {
                console.log(response);
                navigate("/");
            })
        .catch ( (error) => 
            {
                console.log(error)
                setErrors(error.response.data.errors);
            });
    }

    useEffect ( () =>
    {
        axios.get(`http://localhost:8000/api/pets/${_id}`)
        .then ( (response) =>
        {
            console.log(response.data);
            setUpdatedPet(response.data);
        })
        .catch ( (err) => 
        {
            console.log(err)
        });
    }, []) 

    return (
        <div>
            <header>
                <h1>Pet Shelter</h1>
                <Link to={"/"}>Home</Link>
            </header>
            <h3>Edit {pet.name}</h3>
            
            <Form pet={updatedPet} setPet={setUpdatedPet} submitHandler={updateHandler} errors={errors}/>
                
        </div>
    )
}

export default UpdatePet;