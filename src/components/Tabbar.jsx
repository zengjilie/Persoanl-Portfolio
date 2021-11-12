import React from "react";
import "../styles/tabbar.css";
import "../fonts/Baloo_Paaji_2/BalooPaaji2-ExtraBold.ttf"

function Tabbar(props){
    //click show inner graph
    //do not fix the height in cellphone mode
    //fix the height in desktop mode
    //use props

    //desktop restyling
    // const {innerHeight:height, innerWidth:width} = window;

    // const buttonStyle = width > 600 ? { 
    //     height: `${height-40}px`
    // }:{height:"74px"};

    return (
        <div className = "button-container" >
            
            <div className = "button-box">
                <button 
                id = "1" 
                className = "tabbar-button" 
                onClick = {props.create}>
                    CREATE
                </button>

                <div className = "button-background"></div>
            </div>

            <div  className = "button-box">
                <button 
                id = "2" 
                className = "tabbar-button" 
                onClick = {props.clean}>
                    CLEAN
                </button>

                <div className = "button-background"></div>
            </div>            

            {/* in order to use opacity, we need to use a seperate div */}
            <div className="container-background"></div>   
        </div>
    );
};

export default Tabbar;
