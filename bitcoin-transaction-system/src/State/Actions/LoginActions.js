import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const postLogin = (login, navigate) => (dispatch) => {

    dispatch({ type: LOGIN_START })
    axios.post('TODO HAVE TO SET UP HEROKU', login)
        .then(response => {
            dispatch({ type: LOGIN_SUCCESS, payload: response.data })
            localStorage.setItem('token', response.data.token)
            navigate('/Dashboard')
        })
}