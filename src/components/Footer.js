import { useContext } from "react";
import UserContext from "./UserContext";
const Footer = () => {
    const {user} = useContext(UserContext);
    return <h4 className="p-10 m-20">This sit is developed by {user.name}</h4>;
  };
export default Footer;