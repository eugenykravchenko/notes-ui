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
                <div class="row border bg-dark text-white">
                    <div class="col col-sm-3">Title</div>
                    <div class="col-12 col-sm">Text</div>
                </div>
                {this.props.notes.map(x => {return (<NotesListItem key={x._id} {...x} onDelete={this.props.onDelete}/>)})}
            </div>
        );
    }
}

export { NotesList };
