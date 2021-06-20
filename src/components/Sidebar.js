import React from "react";
import NoteList from "./NoteList";

function Sidebar({ notes,setNote }) {

 // console.log(notes)
  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} setNote={setNote}/>
      <button>New</button>
    </div>
  );
}

export default Sidebar;
