import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import noteReducer from './noteReducer';
import projectReducer from './projectReducer';

export default combineReducers({
    form: formReducer,
    notes: noteReducer,
    projects: projectReducer
})