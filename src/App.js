import Notes from './components/Notes'
import React, { useState } from 'react'
import { MdClearAll } from 'react-icons/md'


function App() {
  const [listNote, setListNote] = useState([]); 
  const [note, setNote] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [btnClear, setBtnClear] = useState(false);
 
  const removeItem = (id) => {
    setListNote(listNote.filter((note) => note.id !== id));
  }
  const editItem = (id) => {
    const specificItem = listNote.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setNote(specificItem.title);
  }

  const handleClear = () => {
    setListNote([]);
    setBtnClear(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note) {
      console.log('notes empty');
    }
     else if (note && isEditing) {
      setListNote(
        listNote.map((noteItem) => {
          if (noteItem.id === editID) {
            return { ...noteItem, title: note };
          }
          return noteItem;
        })
      );
      setNote('');
      setEditID(null);
      setIsEditing(false);
    } else {
      let Id = new Date().getTime().toString();
      const newNote = { id: Id, title: note };
      setListNote([...listNote, newNote]);
      setBtnClear(true);
      setNote('');
    }
  
  }
  return (
    <div className="main">
      <div className = 'container'>
        <h2>Todo App</h2>
        <p className= 'underline'></p>
      <form className='input-control' onSubmit={handleSubmit}>
        <label htmlFor='input-info'> Text : </label>
        <input
          className='input-box'
          type='text'
          value={note}
          onChange={(e) =>setNote(e.target.value)}
        ></input>
        <button className='btn-submit' type='submit'>
          {isEditing ? 'edit' : 'submit'}
        </button>
        </form>
        {listNote.length > 0 && (
          <div>
            <Notes listNote={listNote} removeItem={removeItem} editItem={editItem} ></Notes>
            <button className='btn-clearAll' onClick={() => handleClear()}><MdClearAll color='rgb(165, 42, 42)' size='2rem'/></button>
          </div>
        )}
        </div>
      
    </div>
  );
}

export default App;
