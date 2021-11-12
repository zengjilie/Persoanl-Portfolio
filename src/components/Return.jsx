import React from "react";
import ArrowIcon from "./ArrowIcon";
import "../styles/return.css";
import "../styles/arraw-icon.css";

function Return(){
    
    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <button className = "return-button" onClick = {scrollToTop}>
            <ArrowIcon className = "arrow"/>
        </button>
    );
}

export default Return;