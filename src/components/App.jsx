import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";


function App() {
    const [noteList,updateList]=React.useState([]);

    function addNote(note){
        console.log(note);
        updateList((prevValue)=>{
            return [...prevValue,note]
        })
    }
    function deleteNote(id){
        updateList((prevNotes)=>{
            return prevNotes.filter((noteitem,index)=>{
                return index!==id;
            })
        })
    }
    return <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map( note =>
         <Note key={note.key} 
        title={note.title} 
        content={note.content} />
        )}
        {noteList.map((noteItem,index)=>{
            return (
                <Note 
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    dleteItem={deleteNote}
                />
            )
        })}
        <Footer />
    </div>
}

export default App;