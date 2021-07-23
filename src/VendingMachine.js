import React from "react";
import { NavLink} from "react-router-dom";

const VendingMachine = () => {
    return (<>
        <NavLink exact to="/soda">Soda</NavLink>
        <NavLink exact to="/chips">Chips</NavLink>
        <NavLink exact to="/sardines">Sardines</NavLink>
    </>);
}

export default VendingMachine;