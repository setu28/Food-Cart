import { useState } from "react";

const Section = ({title, description, isVisible, setisVisible}) =>{


    return(
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {isVisible? (
                <button 
                onClick={() => 
                setisVisible(false)}
                className="cursor-pointer underline"
            >
            Hide
            </ button>
            ) : (
                <button 
                onClick={() => 
                setisVisible(true)}
                className="cursor-pointer underline"
            >
            Show
            </ button>

            )}
            
            {isVisible && <p>{description}</p>}
        </div>

    );
};

const Instamart = () =>{

const [sectionconfig, setSectionconfig] = useState({
    showinstamart: true,
    showswiggy: true,
    showzomato: true,
    });
    return(
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instmart</h1>
            <Section title={"Team InstaMart"} 
            description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
            } 
            isVisible={sectionconfig.showinstamart}
            setisVisible={()=>
            setSectionconfig({
                showinstamart: true,
                showswiggy: false,
                showzomato: false,

            })}

            />
            <Section title={"Team Swiggy"} 
            description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
            }
            isVisible={sectionconfig.showswiggy} 
            setisVisible={()=>
                setSectionconfig({
                    showinstamart: false,
                    showswiggy: true,
                    showzomato: false,
    
                })}
            />
            <Section title={"Team Zomato"} 
            description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
            } 
            isVisible={sectionconfig.showzomato}
            setisVisible={()=>
                setSectionconfig({
                    showinstamart: false,
                    showswiggy: false,
                    showzomato: true ,
    
                })}
            />
        </div>
    );
}
export default Instamart;