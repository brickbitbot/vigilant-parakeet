import { 
    LOAD_PLANETS_SUCCESS,
    LOAD_FILMS_SUCCESS,
    LOAD_RESIDENTS_SUCCESS, 
    LOAD_DETAIL_SUCCESS
} from './actionTypes';

export const loadPlanetsSuccess = (count, next, previous, results) => ({
    type: LOAD_PLANETS_SUCCESS,
    payload: { count, next, previous, results },
});

export const loadFilmsSuccess = (films) => ({
    type: LOAD_FILMS_SUCCESS,
    payload: { films },
});

export const loadResidentsSuccess = (residents) => ({
    type: LOAD_RESIDENTS_SUCCESS,
    payload: { residents },
});

export const loadDetailSuccess = (data) => ({
    type: LOAD_DETAIL_SUCCESS,
    payload: { data },
});