import { 
    LOAD_PLANETS_SUCCESS,
    LOAD_FILMS_SUCCESS,
    LOAD_RESIDENTS_SUCCESS,
    LOAD_DETAIL_SUCCESS
} from '../actions/actionTypes';
import { initialPlanets } from '../initialState';

export default function Planets(state = initialPlanets, action) {
    switch (action.type) {
        case LOAD_PLANETS_SUCCESS: {
            return {
                ...state,
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                results: action.payload.results
            }
        }
        case LOAD_FILMS_SUCCESS: {
            return {
                ...state,
                films: [...action.payload.films]
            }
        }
        case LOAD_RESIDENTS_SUCCESS: {
            return {
                ...state,
                residents: [...action.payload.residents]
            }
        }
        case LOAD_DETAIL_SUCCESS: {
            delete action.payload.data['action']
            return {
                ...state,
                detail: action.payload.data
            }
        }
        default:
            return state;
    }
}