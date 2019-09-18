import React from 'react';

function NotesListItem(props) {
    return (
        <div>
            <div>{props.title}</div>
            <div>{props.text}</div>
            <button onClick={(event) => props.onDelete(props._id)}>Delete</button>
        </div>
    );
}

export { NotesListItem };
