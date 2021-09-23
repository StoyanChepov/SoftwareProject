import _ from 'lodash';
import { 
    DELETE_PROJECT,
    FETCH_PROJECTS,
    FETCH_PROJECT
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case DELETE_PROJECT:
            return _.omit(state.projects, action.payload);
        case FETCH_PROJECTS:
            return {...state.projects, ..._.mapKeys(action.payload, 'id')};
        case FETCH_PROJECT:
            return {...state.projects, [action.payload.id]: action.payload };
        default:
            return state;
    }
}