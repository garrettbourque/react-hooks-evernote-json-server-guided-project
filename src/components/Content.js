import React,{useEffect,useState} from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content({notes}) {
  const[viewer, setViewer]=useState(false);
  const [input, setInput] = useState("");
  const [inputT, setInputT] = useState("");

  const editMode=()=>{
    console.log("edit mode")
    setViewer(!viewer)
    setInput(notes.body)
    setInputT(notes.title)

    }
  //console.log(notes)
  const getContent = () => {
    if (viewer) {
      return <NoteEditor notes ={notes}  input={input}  setInput={setInput} editMode={editMode} inputT={inputT} setInputT={setInputT}/>;
    } else if (!viewer) {
      return <NoteViewer notes ={notes} editMode={editMode}/>;
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
