import config from '../config';

export async function getNotes() {
    console.log(config);
    const response = await fetch(config.apiUrl + '/notes');
    return response.json();
}
