import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const AllPets = (props) => 
{
    const [petsList, setPetsList] = useState([]);
    
    useEffect( () =>
    {
        axios.get("http://localhost:8000/api/pets")
            .then( (response) => 
            {
                console.log(response.data);
                setPetsList(response.data);
            })
            .catch ( (error) => 
            {
                console.log(error);
            })
    }, [])
    
    return (
        <div>
            <header>
                <h1>Pet Shelter</h1>
                <Link to={"/create"}>Add pet to shelter</Link>
            </header>
            <h3>These pets are looking for a good home</h3>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Type
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        petsList?

                        // If
                        petsList.map ( (pet, index) => (
                            <tr key={index}>
                                <td>
                                    {pet.name}
                                </td>
                                <td>
                                    {pet.type}
                                </td>
                                <td>
                                    <button
                                        onClick={()=>{navigate(`/pet/${pet._id}`)}}>
                                        Details
                                    </button>
                                    <button
                                        onClick={()=>{navigate(`/pet/update/${pet._id}`)}}>
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))

                        // Else
                        :null
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllPets;