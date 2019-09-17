import React from 'react';
import { NotesListItem } from './NotesListItem';

class NotesList extends React.Component {
    render() {
        if (this.props.errorOnLoad) {
            return (<div>Error on load</div>);
        }
        if (this.props.notes.length === 0) {
            return (<div>No data</div>);
        }
        return (
            <div>
                {this.props.notes.map(x => {return (<NotesListItem key={x._id} {...x}/>)})}
            </div>
        );
    }
}

export { NotesList };
