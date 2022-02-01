import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import DeletePet from "../components/DeletePet";

const DisplayOnePet = (props) =>
{
    const {_id} = props;
    const [pet, setPet] = useState({});

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

    return (
        <div>
            <header>
                <h1>Pet Shelter</h1>
                <Link to={"/"}>Home</Link>
            </header>
            <h2>Details about {pet.name}</h2>
            <DeletePet _id={pet._id}/>
            <table>
                <tbody>
                    <tr>
                        <th>Pet Type:</th>
                        <td>{pet.type}</td>
                    </tr>
                    <tr>
                        <th>Description: </th>
                        <td>{pet.description}</td>
                    </tr>
                    <tr>
                        <th>Skills: </th>
                        <td className="skills">{pet.skill1}</td>
                        <td className="skills">{pet.skill2}</td>
                        <td className="skills">{pet.skill3}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={ (event) => navigate("/")}>
                    Cancel
            </button>
        </div>
    )
}

export default DisplayOnePet;