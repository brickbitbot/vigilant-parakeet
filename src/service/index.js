import axios from 'axios';

export const loadSingle = async (url) => {
    let response = await axios.get(url);
    return response.data;
}

export const loadMultiple = async (urls) => {
    const responses = await Promise.all(
        urls.map(url => axios.get(url))
    );
    const results = responses.map(response => response.data);
    return results;
}