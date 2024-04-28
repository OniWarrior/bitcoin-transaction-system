import * as yup from 'yup'



const ClientSellBitcoinFormSchema = yup.object().shape({
    Bitcoin_balance: yup.number()
        .required('The amount of bitcoin must be entered.')
        .typeError('You must specify a number')
        .min(1, 'The amount cannot be negative'),
    Bitcoin_price: yup.number(),
    comm_type: yup.string()
        .required("Please select a commission type")
        .oneOf(['USD', 'Bitcoin'], "Commission type must be either 'Bitcoin' or 'USD'"),
    email: yup.string()
        .trim()
        .required()
        .required("Email/Password is required. Please fill out field")
        .email()
    ,
    password: yup.string()
        .trim()
        .required("Email/Password is required.Please fill out field")



})

export default ClientSellBitcoinFormSchema