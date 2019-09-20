import React from 'react';
import { withRouter } from 'react-router-dom';
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
                <NotesList notes={this.state.notes} errorOccurred={this.state.errorOccurred} onDelete={this.handleNoteDelete} />
                <div class="mt-1">
                    <button type="button" class="btn btn-dark float-right" onClick={this.handleNoteCreate}>Create</button>
                </div>
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

    handleNoteCreate = () => {
        this.props.history.push('/notes/create');
    }

    handleNoteDelete = (id) => {
        deleteNote(id)
            .then(() => this.searchNotes())
            .catch(err => this.setState({...this.state, errorOccurred: true}));
    }
}

export const NotesPage = withRouter(NotesPageCore);
