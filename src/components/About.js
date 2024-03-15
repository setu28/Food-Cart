import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
const About = () =>{
    return(
        <div>
            <h1>Welcome to the About Us Page</h1>
            <p>We are trying to master React Here</p>
            <Profile name={"setu"}/>
        </div>
       
    )
}
export default About;