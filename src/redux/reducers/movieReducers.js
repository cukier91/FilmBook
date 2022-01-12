import { ActionTypes } from "../const/action-types"

export const movieReducer = (state=null, {type, payload}) => {
    switch (type) {
        case ActionTypes.FETCH_CURRENT_MOVIES:
            return {...state, movies: payload}   
        default:
            return state;
    }
}