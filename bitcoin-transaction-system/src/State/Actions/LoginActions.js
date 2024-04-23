import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const postLogin = (login, navigate) => (dispatch) => {

    dispatch({ type: LOGIN_START })
    axios.post('https://bitcoin-transaction-system-be-72349974fde7.herokuapp.com/api/auth/Login', login)
        .then(response => {

            dispatch({ type: LOGIN_SUCCESS, payload: response.data })
            localStorage.setItem('token', response.data.token)

            navigate('/ManagerDashboard')
        })
        .catch(err => {

            dispatch({ type: LOGIN_FAILURE, payload: err.message })
        })
}