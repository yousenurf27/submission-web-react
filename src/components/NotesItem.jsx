import React from 'react'
import NotesItemContent from "./NotesItemContent"
import NotesItemAction from "./NotesItemAction"

export default function NotesItem({ id, title, body, archived, createdAt, onDelete, onArsip }) {
  return (
    <div className="note-item">
      <NotesItemContent title={title} body={body} createdAt={createdAt} />
      <NotesItemAction id={id} onDelete={onDelete} onArsip={onArsip} archived={archived} />
    </div>
  )
}
