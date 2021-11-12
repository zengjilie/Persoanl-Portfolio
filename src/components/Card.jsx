import React,{useState} from "react";
import "../styles/card.css";
import "../fonts/Baloo_Paaji_2/BalooPaaji2-ExtraBold.ttf";
import { isCompositeComponentWithType } from "react-dom/test-utils";

function Card(props){
    //upon creation, id = index, model = D
    //ready to type input, when done
    //click D and input bar disappear, while the content in input bar rendered by <p> ele
    //click E and 
    const [mode, setMode] = useState("D");

    const [inputText, setInputText] = useState("");

    const [isEditable, setIsEditable] = useState(true);

    function handleMode(){
        if(mode === "D"){
            setIsEditable(false);
            setMode("E");
            //when It's in done mode, the D letter will move up and down
            //update the value in the particular note
            props.edit(inputText, props.id);
        }else if(mode === "E"){
            setIsEditable(true);
            setMode("D");
        }
    }

    function handleInput(event){
        setInputText(event.target.innerText);
    }

    function handleClose(){
        props.close(props.id);
    }

    const backgroundStyle = {
        boxShadow:"0 0 0 3px white"
    }

    return (
        <div className = "card-container" style = {isEditable === true ? backgroundStyle:null}>
            <div className = "card-elements-container">
                <div className = "card-button-container">
                    {/* <div className = "card-id">{props.id}</div> */}
                    <div className = "card-button">{props.id + 1}</div>
                    <button 
                        className = "card-button" 
                        onClick = {handleMode}
                        style = {isEditable === true ? {textDecoration:"underline"}:null}>{mode}</button>
                    <button 
                        className = "card-button" 
                        onClick = {handleClose}>C</button>
                </div>
                
                <p
                    className = "card-input" 
                    onInput = {handleInput}
                    contentEditable = {isEditable}
                    suppressContentEditableWarning={true}
                >{props.text}</p>
            </div>
            <div className = "card-background"></div>
        </div>
    );
}

export default Card;