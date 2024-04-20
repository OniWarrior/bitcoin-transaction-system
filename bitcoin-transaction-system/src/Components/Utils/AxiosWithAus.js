import axios from 'axios'

const axiosWithAus = () => {
    return axios.create({
        baseURL: 'https://bitcoin-transaction-system-be-72349974fde7.herokuapp.com/',
        headers: {
            authorization: localStorage.getItem('token')
        }
    })

}

export default axiosWithAus