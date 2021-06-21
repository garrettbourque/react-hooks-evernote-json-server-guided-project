import React,{useState} from "react";

function NoteEditor({notes, input, setInput,editMode,inputT,setInputT,}) {
  //const [input, setInput] = useState('');
    
   // setInput(notes.body)
  const onChange=(e) =>{
    e.preventDefault()
    let{value}=e.target
    setInput(value)
  }
  const onChangeT=(e) =>{
    e.preventDefault()
    let{value2}=e.target
    setInputT(value2)
  }

  const saveChange=(e)=>{
    const savedNote ={
      id:notes.id,
      userId:notes.userID,
      title:inputT,
      body:input
    }
    fetch("http://localhost:3000/notes/"+notes.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(savedNote),
    })
      .then((r) => r.json())
     // .then(console.log(new newNotes));
   
  }
  
  //console.log(input)
  return (
    <form className="note-editor">
      <input type="text" name="title" value={inputT} onChange={onChangeT} />
      <textarea name="body" value={input}  onChange={onChange}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" onClick={saveChange()}/>
        <button type="button" onClick={editMode}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
