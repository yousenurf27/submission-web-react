import React, { Component } from 'react'
import { getInitialData } from "../utils/index"
import NotesHeader from "./NotesHeader"
import NotesBody from "./NotesBody"

export default class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: '',
    }

    this.onAddNotesEventHandler = this.onAddNotesEventHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onArsipEventHandler = this.onArsipEventHandler.bind(this);
  }

  onSearchEventHandler(e) {
    this.setState(() => {
      return {
        search: e.target.value,
      }
    })
  }

  onDeleteEventHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({notes})
  }

  onArsipEventHandler(id) {
    const notes = this.state.notes.map(note => note.id === id ? {...note, archived: !note.archived} : note);
    this.setState({notes})
  }

  onAddNotesEventHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: title,
            body: body,
            createdAt: new Date().toISOString(),
            archived: false,
          }
        ]
      }
    })
  }

  render() {
    const filterNotes = this.state.notes.filter(note => 
      note.title.toLowerCase().includes(this.state.search.toLowerCase())
    )

    return (
      <>
        <NotesHeader onSearch={this.onSearchEventHandler} search={this.state.search} />
        <NotesBody addNotes={this.onAddNotesEventHandler} notes={filterNotes} onDelete={this.onDeleteEventHandler} onArsip={this.onArsipEventHandler} />
      </>
    )
  }
}
