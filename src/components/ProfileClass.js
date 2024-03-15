import React from "react";
import UserContext from "./UserContext";

class Profile extends React.Component{
constructor(props){
    super(props);
    this.state={
        userInfo: {
            name: "Dummy Name",
            location: "Location Name"
        },
    };
}

async componentDidMount(){
    //API CALL

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
        userInfo: json,
    })
    console.log(this.state.userInfo);
}

componentDidUpdate(){
    console.log(this.state.userInfo);
}

    render(){
        return(
            <div>
                <UserContext.Consumer>
                    {(value)=> console.log(value)}
                </UserContext.Consumer>
                <h1>This is Profile class compoenent</h1>
                <img src={this.state.userInfo.avatar_url}></img>
                <h2>{this.state.userInfo.name}</h2>
                
            </div>
        );    
    }
}
export default Profile;
