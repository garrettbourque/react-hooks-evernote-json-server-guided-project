import React,{useEffect,useState} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const[notes, setNotes] = useState([])
  const[note,setNote] = useState([])
  const[fNote, setFNote] = useState("")

  useEffect(()=>{
    fetch("http://localhost:3000/notes")
    .then(resp => resp.json())
    .then(data => setNotes(data))
  },[])

//console.log(notes)
  const foundNote = notes.filter((fnote)=>
    fnote.title.toLowerCase().includes(fNote.toLowerCase())
    )
    

  return (
    <>
      <Search fNote={fNote} setFNote={setFNote}/>
      <div className="container">
        <Sidebar notes ={notes} setNote={setNote} foundNote={foundNote}/>
        <Content notes ={note}/>
      </div>
    </>
  );
}

export default NoteContainer;
