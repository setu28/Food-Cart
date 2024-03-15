import { useRouteError } from "react-router-dom";

const ErrorPage = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Welcome to the Error Page</h1>
            <h2>Oops! Something went wrong</h2>
            <h2>{err.staus + ": "+ err.statusText}</h2>

        </div>
    )
}
export default ErrorPage;