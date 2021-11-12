import React,{useState}from "react";
import Tabbar from "./components/Tabbar";
import Card from "./components/Card";
import Return from "./components/Return";
import "./styles/app.css";
function App() {
  //keep all the notes(data)
  const[notes, setNotes]  = useState([]);
  
  function create(){
    setNotes((prevNotes) =>{
      return [...prevNotes, "Write here..."]
    })
  }

  function edit(inputText, id){
    setNotes((prevNotes) => {
      return prevNotes.map((item, index) => {
        if(index === id){
          return inputText;
        }else{
          return item;
        }
      })
    });
  }

  function clean(){
    setNotes([]);
  }

  function close(id){
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      })

    })
 
  }

  return (
    <div className = "App">
      <Tabbar 
        create = {create} 
        clean = {clean}
      />
      <div className = "card-box">
        {notes.map((item, index) => 
          <Card 
            close = {close} 
            edit = {edit}
            key = {index}
            id = {index}
            text = {item}
          /> 
        )}
      </div>
      
      <Return/>
    </div>
  );
}

export default App;
