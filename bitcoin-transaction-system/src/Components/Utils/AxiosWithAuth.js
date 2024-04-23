import axios from 'axios'

const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://bitcoin-transaction-system-be-72349974fde7.herokuapp.com/',
        headers: {
            authorization: localStorage.getItem('token')
        }
    })

}

export default axiosWithAuth