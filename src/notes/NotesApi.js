import config from '../config';

export async function getNotes() {
    const response = await fetch(config.apiUrl + '/notes');
    return response.json();
}

export async function createNote(title, text) {
    const response = await fetch(config.apiUrl + '/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'title=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(text)
    });
    return response.json();
}

export function deleteNote(id) {
    return fetch(config.apiUrl + '/notes/' + id, {
        method: 'DELETE'
    });
}
