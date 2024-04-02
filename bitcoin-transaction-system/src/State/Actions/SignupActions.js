import axios from "axios";

export const SIGNUP_START = 'SIGNUP_START'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'


export const register = (signup, navigate) => (dispatch) => {
    dispatch({ type: SIGNUP_START })
    axios.post('TODO have to setup heroku', signup)
        .then(response => {
            dispatch({ type: SIGNUP_SUCCESS, payload: response.data })
            navigate('/Login')

        })
}