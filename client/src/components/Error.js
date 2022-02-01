import React from "react";
import { Link } from "@reach/router";

const Error = (props) =>
{
    return (
        <div>
            <p>Could not find the pet you were looking for. Would you like to add a pet?</p>
            <Link to={"/create"}>Add pet to shelter</Link>
        </div>
    )
}

export default Error;