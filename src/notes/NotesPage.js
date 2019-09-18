import React from 'react';
import { Link } from 'react-router-dom';
import { NotesList } from './NotesList';
import { getNotes, deleteNote } from './NotesApi';

class NotesPageCore extends React.Component {
    constructor(props) {
        super(props);
        this.state = { notes: [], errorOccurred: false };
    }

    componentDidMount() {
        this.searchNotes();
    }

    render() {
        return (
            <div>
                <Link to="/notes/create">Create</Link>
                <NotesList notes={this.state.notes} errorOccurred={this.state.errorOccurred} onDelete={this.handleNoteDelete} />
            </div>
        );
    }

    searchNotes() {
        this.setState({...this.state, errorOccurred: false });

        getNotes()
            .then(notes => this.setState({notes, errorOccurred: false}))
            .catch(err => {
                this.setState({...this.state, errorOccurred: true});
            });
    }

    handleNoteDelete = (id) => {
        deleteNote(id)
            .then(() => this.searchNotes())
            .catch(err => this.setState({...this.state, errorOccurred: true}));
    }
}

export {NotesPageCore as NotesPage};
