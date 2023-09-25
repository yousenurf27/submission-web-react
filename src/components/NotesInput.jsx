import React, { Component } from 'react'

export default class NotesInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      limit: 50,
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(e) {
    if ( this.state.title.length + 1 <= this.state.limit ) {
      this.setState(() => {
        return {
          title: e.target.value,
        }
      })
    }
  }

  onBodyChangeEventHandler(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      }
    })
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    this.props.addNotes(this.state);
    this.setState(() => {
      return {
        title: '',
        body: '',
      }
    })
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">Sisa karakter: {this.state.limit - this.state.title.length}</p>
          <input type="text" className="note-input__title" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
          <textarea type="text" className="note-input__body" placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} required />
          <button type="submit">Buat</button>
        </form>
      </div>
    )
  }
}
