import { useState,useContext } from "react";
import {Title} from "./Title";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";


const Header = () => {

const [newlogo,setnewlogo] = useState("Food Villa");

const {user} = useContext(UserContext);

//const cartItems = useSelector((store) => store.cart.items);
const totalItemsCount = useSelector((store) => store.cart.totalItemsCount);
console.log("Header:", totalItemsCount);


return (
  <>
    <header class="justify-between p-1 px-2 bg-white">
      <div className="flex bg-pink-50 p-4 px-4">
        <div class="grid grid-cols-4 gap-[15rem] px-20">
            <div className="flex">
              <div> 
                  <a href="#">
                      <img
                    
                      alt="logo"
                      src="https://play-lh.googleusercontent.com/4OOU73CI8knF4TByikeCEA1IOj3hb_AyXdV0Y2_XNikAoVan257QCO0ppXK9e3Z1ncY"
                      />      
                  </a>
              </div>
              <div>
                <p>Your Current location</p>
              </div>
            </div>
            
            <div className="flex">
                  <ul className="flex px-80 py-5">
                      <li className="flex px-5">
                      <Link to="/Search">Search</Link>
          
                      </li>
                    
                    <li className="flex px-5">Help</li>
                   
                    <li className="flex px-5">
                      <Link to="/cart"> Cart count {totalItemsCount}</Link>
                     
                    </li>
                  </ul>

              
          </div>
        
        
        </div>
        
      </div>
      
    </header>
  
      
      
  {/* 
  <div className="flex bg-pink-50">
    <div className="global-nav">
      <Title />

    </div>
    
    <div className="nav-items">
      <ul className="flex py-10">
        <li className="px-2">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2">
          <Link to="/about">About</Link>
        </li>
        <li className="px-2">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="px-2">
          
          <Link to="/Instamart">Instmart</Link>
        </li>
        <li className="px-2">Cart- {cartItems.length} items</li> 
      </ul>
    </div>
  </div>
  */}
  </>
);
};

export default Header;