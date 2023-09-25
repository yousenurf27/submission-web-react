import React from 'react'

export default function NotesHeader({ search, onSearch }) {
    return (
      <div className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <input type="text" placeholder="Cari catatan" value={search} onChange={(e) => onSearch(e)} />
        </div>
      </div>
    )
}
