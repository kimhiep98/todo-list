import React, {useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'



function Notes({ listNote, removeItem, editItem }) {
    return (
        <div className ='container-info'>
            {listNote.map((note) => {
                const { id, title } = note;
                return <div className='note-info' key={id}>
                    <p>{ title}</p>
                    <div className='container-btn'>
                        <button className='btn-edit' onClick={() => editItem(id)}> <AiFillEdit size ='1.5rem'/></button>
                        <button className='btn-remove' onClick={() => removeItem(id)}> <FaTrash size = '1.5rem'/></button>
                    </div>
                </div>
            })}
            
        </div>
    )
}

export default Notes
