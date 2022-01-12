import movieApi from "../../apis/movieApi";
import { ActionTypes } from '../const/action-types';

export const fetchCurrentPlayed = () => async (dispatch) => {
    const response = await movieApi.get(`/now_playing?api_key=${process.env.REACT_APP_API_KEY}`)

    dispatch({type: ActionTypes.FETCH_CURRENT_MOVIES, payload: response.data.results})
}

export const fetchRecomended = () => async (dispatch) => {
    const response = await movieApi.get(`/upcoming?api_key=${process.env.REACT_APP_API_KEY}`)

    dispatch({type: ActionTypes.FETCH_DISCOVER_MOVIES, payload: response.data.results})
}