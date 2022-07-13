import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selector } from "../fueture/User";

function Logout() {
    const user = useSelector(selector);
    const dispatch = useDispatch();
    const handleout = (e) => {
        dispatch(logout());
    };
    return ( <
        div >
        <
        h1 >
        welocme < span > { user.name } < /span>{" "} <
        button onClick = {
            (e) => handleout(e) } > Logout < /button>{" "} <
        /h1>{" "} <
        /div>
    );
}

export default Logout;