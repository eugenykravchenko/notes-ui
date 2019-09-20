import React from 'react';

function NotesListItem(props) {
    return (
        <div class="row border bg-light text-dark py-1">
            <div class="col col-sm-3">{props.title}</div>
            <div class="col-auto col-sm-auto order-sm-last">
                <button type="button" class="btn btn-danger btn-sm" onClick={(event) => props.onDelete(props._id)}>Delete</button>
            </div>
            <div class="col-12 col-sm">{props.text}</div>
        </div>
    );
}

export { NotesListItem };
