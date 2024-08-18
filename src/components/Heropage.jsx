
import {useNavigate } from "react-router-dom";

export const Heropage=()=> {
    const navigate= useNavigate();
    const goback=()=>{
        navigate("/")
    };


    return(
        
        <div style={{
            height:"100vh",
            width:"100vw",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"

        }}>
            <h1>hero page</h1>
            <button onClick={goback}>go back</button>
       </div>
        
    );

};