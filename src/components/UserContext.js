import { createContext } from "react";

const UserContext = createContext({
    user:{
    name: "Dummy",
    email: "Dummy email",
    },
});

export default UserContext;

