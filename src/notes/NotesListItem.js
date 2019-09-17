import React from 'react';

function NotesListItem(props) {
    return (
        <div>
            <div>{props.title}</div>
            <div>{props.text}</div>
        </div>
    );
}

export { NotesListItem };
