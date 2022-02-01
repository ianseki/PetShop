import React from "react";
import { navigate } from "@reach/router";

const Form = (props) =>
{

    const {submitHandler, pet, setPet, errors, setErrors} = props;

    const inputHandler = (event) =>
    {
        let newStateObject = {...pet};
        newStateObject[event.target.name] = event.target.value;
        // console.log(event.target.name, event.target.value);
        setPet(newStateObject);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="column">
                    <p>
                        <label>Name</label><br />
                        <input 
                            type="text" 
                            name="name"
                            value={pet.name}
                            onChange = {inputHandler}/>
                        {errors.name ? <span>{errors.name.message}</span> : null}
                    </p>
                    <p>
                        <label>Type</label><br />
                        <input 
                            type="text" 
                            name="type"
                            value={pet.type}
                            onChange = {inputHandler}/>
                        {errors.type ? <span>{errors.type.message}</span> : null}
                    </p>
                    <p>
                        <label>Description</label><br />
                        <input 
                            type="text" 
                            name="description"
                            value={pet.description}
                            onChange = {inputHandler}/>
                        {errors.description ? <span>{errors.description.message}</span> : null}
                    </p>
                    <input type="submit"/>
                    <button onClick={ (event) => navigate("/")}>
                        Cancel
                    </button>
                </div>
                <div className="column">
                    <h4>Skills (optional)</h4>
                    <p>
                        <label>Skill 1</label><br />
                        <input 
                            type="text" 
                            name="skill1"
                            value={pet.skill1}
                            onChange = {inputHandler}/><br />
                    </p>
                    <p>
                        <label>Skill 2</label><br />
                        <input 
                            type="text" 
                            name="skill2"
                            value={pet.skill2}
                            onChange = {inputHandler}/><br />
                    </p>
                    <p>
                        <label>Skill 3</label><br />
                        <input 
                            type="text" 
                            name="skill3"
                            value={pet.skill3}
                            onChange = {inputHandler}/><br />
                    </p>
                </div>
                
            </form>
        </div>
    )
}

export default Form;