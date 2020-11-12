import { 
    LOAD_PLANETS_SUCCESS,
    LOAD_DETAIL_SUCCESS
} from '../actions/actionTypes';

export const initialPlanets = {
    count: 0,
    next: "",
    previous: null,
    results: [],
    detail: {},
}

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