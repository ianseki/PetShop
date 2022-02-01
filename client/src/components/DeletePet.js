import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";


const DeletePet = (props) =>
{
    const {_id} = props;

    const deleteHandler = (event) =>
    {
        axios.delete(`http://localhost:8000/api/pets/${_id}`)
            .then ( (response) =>
            {
                console.log(response.data);
                navigate("/");
            })
            .catch ( (error) => 
            {
                console.log(error);
            })
    }

    return (
        <button onClick={deleteHandler}>Adopt Pet</button>
    )
}

export default DeletePet;