import { 
    LOAD_RESIDENTS_SUCCESS,
} from '../actions/actionTypes';

export default function residents(state = [], action) {
    switch (action.type) {
        case LOAD_RESIDENTS_SUCCESS: {
            return [...state, ...action.payload.residents];
        }
        default:
            return state;
    }
}