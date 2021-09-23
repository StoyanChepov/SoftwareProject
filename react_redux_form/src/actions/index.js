import db from '../apis/db';
import history from '../history';
import { 
    CREATE_NOTE,
    CREATE_PROJECT,
    DELETE_NOTE,
    EDIT_NOTE,
    FETCH_NOTES,
    FETCH_NOTE,
    FETCH_PROJECTS,
    DELETE_PROJECT,
    FETCH_PROJECT
} from './types';

export const createNote = (formValues) => async(dispatch, getState) => {
    const response = await db.post("/notes", formValues);
    dispatch({ type: CREATE_NOTE, payload: response.data });
    history.push('/note');
}

export const createProject = (formValues) => async(dispatch, getState) => {
    const response = await db.post("/projects", formValues);
    dispatch({ type: CREATE_PROJECT, payload: response.data });
    history.push('/project');
}

export const fetchNotes = () => async(dispatch) => {
    const response = await db.get('/notes');
    console.log(response);
    dispatch({ type: FETCH_NOTES, payload: response.data });
}

export const fetchNote = (id) => async(dispatch) => {
    const response = await db.get(`/notes/${id}`);
    dispatch({ type: FETCH_NOTE, payload: response.data });
}

export const fetchProjects = () => async(dispatch) => {
    const response = await db.get('/projects');
    console.log(response);
    dispatch({ type: FETCH_PROJECTS, payload: response.data });
}

export const fetchProject = (id) => async(dispatch) => {
    const response = await db.get(`/projects/${id}`);
    dispatch({ type: FETCH_PROJECT, payload: response.data });
}

export const editNote = (id, formValues) => async(dispatch) => {
    const response = await db.patch(`/notes/${id}`, formValues);
    dispatch({ type: EDIT_NOTE, payload: response.data });
    history.push('/note');
}

export const deleteNote = (id) => async(dispatch) => {
    await db.delete(`/notes/${id}`);
    dispatch({ type: DELETE_NOTE, payload: id });
    history.push('/note');
}

export const deleteProject = (id) => async(dispatch) => {
    await db.delete(`/projects/${id}`);
    dispatch({ type: DELETE_PROJECT, payload: id });
    history.push('/project');
}