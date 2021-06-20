import React from "react";
import NoteList from "./NoteList";

function Sidebar({ notes,setNote,foundNote }) {

 // console.log(foundNote)
  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} setNote={setNote}foundNote={foundNote}/>
      <button>New</button>
    </div>
  );
}

export default Sidebar;
