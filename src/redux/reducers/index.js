import {combineReducers} from 'redux';
import { movieReducer } from './movieReducers';

export const reducers = combineReducers({
    moviesList: movieReducer
})