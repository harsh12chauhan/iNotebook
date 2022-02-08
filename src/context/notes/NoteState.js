import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)


  // Get all Note
  const getNotes = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmYTdiY2RiOTA5YWIxZjdhOTNmOTk3In0sImlhdCI6MTY0MzgwNTY2OX0.QaN6lVoKfStJ4Bi94OfZm5HfJlWff2Lk9EqDGxRaWTk"
      }
    });
    const json = await response.json()
    setNotes(json)
  }

  // ----------------------------------------------------------------------

  // Add a Note
  const addNote = async (title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmYTdiY2RiOTA5YWIxZjdhOTNmOTk3In0sImlhdCI6MTY0MzgwNTY2OX0.QaN6lVoKfStJ4Bi94OfZm5HfJlWff2Lk9EqDGxRaWTk"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const note = await response.json()
    setNotes(notes.concat(note))
  }

  // ----------------------------------------------------------------------

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmYTdiY2RiOTA5YWIxZjdhOTNmOTk3In0sImlhdCI6MTY0MzgwNTY2OX0.QaN6lVoKfStJ4Bi94OfZm5HfJlWff2Lk9EqDGxRaWTk"
      }
    });
    const json = response.json();
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  // ----------------------------------------------------------------------

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmYTdiY2RiOTA5YWIxZjdhOTNmOTk3In0sImlhdCI6MTY0MzgwNTY2OX0.QaN6lVoKfStJ4Bi94OfZm5HfJlWff2Lk9EqDGxRaWTk"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    let newNotes = JSON.parse(JSON.stringify(notes))

    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break ;
      }
    }
    setNotes(newNotes);
  }

  // ----------------------------------------------------------------------

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;