import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
  const notesInitial =[
    {
      "_id": "61fbd69393a8ca916fced7e7",
      "user": "61fa7bcdb909ab1f7a93f997",
      "title": "this is the trial babaye yeahh",
      "description": "Good luck for of and .. IN THE NEXT CHAPTER  i know u suck's",
      "tag": "private",
      "date": "2022-02-03T13:20:19.647Z",
      "__v": 0
    },
    {
      "_id": "61fbd69393a8ca916fced7e7",
      "user": "61fa7bcdb909ab1f7a93f997",
      "title": "this is the trial babaye yeahh",
      "description": "Good luck for of and .. IN THE NEXT CHAPTER  i know u suck's",
      "tag": "private",
      "date": "2022-02-03T13:20:19.647Z",
      "__v": 0
    },
    {
      "_id": "61fbd69393a8ca916fced7e7",
      "user": "61fa7bcdb909ab1f7a93f997",
      "title": "this is the trial babaye yeahh",
      "description": "Good luck for of and .. IN THE NEXT CHAPTER  i know u suck's",
      "tag": "private",
      "date": "2022-02-03T13:20:19.647Z",
      "__v": 0
    },
    {
      "_id": "61fbd69393a8ca916fced7e7",
      "user": "61fa7bcdb909ab1f7a93f997",
      "title": "this is the trial babaye yeahh",
      "description": "Good luck for of and .. IN THE NEXT CHAPTER  i know u suck's",
      "tag": "private",
      "date": "2022-02-03T13:20:19.647Z",
      "__v": 0
    },
    {
      "_id": "61fbd69393a8ca916fced7e7",
      "user": "61fa7bcdb909ab1f7a93f997",
      "title": "this is the trial babaye yeahh",
      "description": "Good luck for of and .. IN THE NEXT CHAPTER  i know u suck's",
      "tag": "private",
      "date": "2022-02-03T13:20:19.647Z",
      "__v": 0
    },
    {
      "_id": "61fbd69393a8ca916fced7e7",
      "user": "61fa7bcdb909ab1f7a93f997",
      "title": "this is the trial babaye yeahh",
      "description": "Good luck for of and .. IN THE NEXT CHAPTER  i know u suck's",
      "tag": "private",
      "date": "2022-02-03T13:20:19.647Z",
      "__v": 0
    },
    {
      "_id": "61fbd69393a8ca916fced7e7",
      "user": "61fa7bcdb909ab1f7a93f997",
      "title": "this is the trial babaye yeahh",
      "description": "Good luck for of and .. IN THE NEXT CHAPTER  i know u suck's",
      "tag": "private",
      "date": "2022-02-03T13:20:19.647Z",
      "__v": 0
    },
    {
      "_id": "61fbd69393a8ca916fced7e7",
      "user": "61fa7bcdb909ab1f7a93f997",
      "title": "This Is The Trial ",
      "description": "Good luck for of and .. IN THE NEXT CHAPTER  i know u suck's",
      "tag": "private",
      "date": "2022-02-03T13:20:19.647Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial);
    return(
      <NoteContext.Provider value={{notes,setNotes}}>
          {props.children}
      </NoteContext.Provider>
    )
}

export default NoteState;