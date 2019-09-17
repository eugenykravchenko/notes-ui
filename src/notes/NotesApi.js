import config from '../config';

export async function getNotes() {
    const response = await fetch(config.apiUrl + '/notes');
    return response.json();
}
