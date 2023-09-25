import React from 'react'
import NotesItem from "./NotesItem"

export default function NotesList({ notes, onDelete, onArsip }) {
  return (
    <div className="notes-list">
      {
        notes.map((note) => (
          <NotesItem 
            key={note.id} 
            {...note} 
            onDelete={onDelete} 
            onArsip={onArsip} 
          />
        ))
      }
    </div>
  )
}
