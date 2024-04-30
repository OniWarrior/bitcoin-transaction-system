import * as yup from 'yup'


const ClientSellBitcoinFormSchema = yup.object().shape({
    Bitcoin_balance: yup.number()
    .required('the amount of bitcoin must be entered.')
    .typeError('you must specify a number')
    .min(1, 'The amount cannot be negative'),
    Bitcoin_price: yup.number(),
    comm_type: yup.number()
    .required("Please select a commission type")
    .oneOf(['USD','Bitcoin'], "Commision type must be either 'Bitcoin or 'USD"),
    email: yup.string()
    .trim()
    .required()
    .required("Email/Password is required. Please fill out the field")
    .email(),
    password: yup.string()
    .trim()
    .required("Email/Password is required. Please fill out the field")

})

export default ClientSellBitcoinFormSchema