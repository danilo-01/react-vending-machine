import React from "react"
import { Link } from "react-router-dom";
import "./snack.css";
const Snack = ({sname, description}) => {
    return <div className="snack">
        <h1>{sname}</h1>
        <p>{description}</p>
        <Link className="snack-link" to="/">Home</Link>
    </div>
}

export default Snack;