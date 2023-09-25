import React from 'react'
import NotesInput from "./NotesInput"
import NotesList from "./NotesList"

export default function NotesBody({ notes,addNotes, onDelete, onArsip }) {
  const archived = notes.filter((note) => {
    return note.archived === true;
  })

  const notArchived = notes.filter((note) => {
    return note.archived === false;
  })

  return (
    <div className="note-app__body">
      <NotesInput addNotes={addNotes} />
      <h2>Catatan Aktif</h2>
      { notArchived.length === 0 ? <p className="notes-list__empty-message">Tidak ada catatan</p> :
        <NotesList notes={notArchived} onDelete={onDelete} onArsip={onArsip} />
      }
      <h2>Arsip</h2>
      { archived.length === 0 ? <p className="notes-list__empty-message">Tidak ada catatan</p> :
        <NotesList notes={archived} onDelete={onDelete} onArsip={onArsip} />
      }
    </div>
  )
}
