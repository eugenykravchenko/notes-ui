import React from 'react';
import { NotesList } from './NotesList';
import { getNotes } from './NotesApi';

class NotesPageCore extends React.Component {
    constructor(props) {
        super(props);
        this.state = { notes: [], errorOnLoad: false };
    }

    componentDidMount() {
        this.searchNotes();
    }

    render() {
        return (
            <div>
                <NotesList notes={this.state.notes} errorOnLoad={this.state.errorOnLoad}/>
            </div>
        );
    }

    searchNotes() {
        this.setState({ notes: [], errorOnLoad: false });

        getNotes()
            .then(notes => this.setState({notes, errorOnLoad: false}))
            .catch(err => {
                this.setState({notes: [], errorOnLoad: true});
            });
    }
}

export {NotesPageCore as NotesPage};
