import { 
    LOAD_FILMS_SUCCESS,
} from '../actions/actionTypes';

export default function films(state = [], action) {
    switch (action.type) {
        case LOAD_FILMS_SUCCESS: {
            return [...state, ...action.payload.films];
        }
        default:
            return state;
    }
}