import React, { useEffect} from "react";

import { useNavigate } from "react-router-dom";

function Project(props) {
    
 let cmp = props.cmp   
const  navigate = useNavigate();

useEffect (() => {
    if(!localStorage.getItem('user-info')){
        navigate('/register')
    }
}, [])

    
    return(
        <>

        </>
    )
}

export default Project;