
import { useNavigate } from "react-router-dom";
import exampleImage from '../assets/example.jpg';
import './Navbar.css'

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className="navbar">
         
            <h1 className="title">web page</h1>
            <ul>
                
                <li className="todo">
                    <a href="/Todolist">Todolist</a>
                </li>
                <li className="calc">
                    <a href="/Calculator">Calculator</a>
                </li>
                <li className="home">
                    <a href="/Homepage">Homepage</a>
                </li>
               
            
                
            </ul>
           
        </div>
        <img  src={exampleImage} alt=""  />
        </>        
        

        
);
};  