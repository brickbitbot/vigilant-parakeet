import axios from 'axios';

export const getDataFromSingleApi = (api) => {
    let res = axios.get(api).then((res) => 
        res.data
    )
    .catch((error) =>
        error
    );
    return res;
}

export const getDataFromApiArray = async (array) => {
    let films = [];
    for( let i in array) {
        let item = await axios.get(array[i]).then((res) => 
            res.data
        )
        .catch((error) =>
            error
        );
        films.push(item)
    }
    console.log(films)
    return films;
}