import * as yup from 'yup'

const TraderSellFormSchema = yup.object().shape({
    Bitcoin_balance: yup.number()
        .required('The amount of bitcoin must be entered.')
        .typeError('You must specify a number')
        .min(1, 'The amount cannot be negative'),
    Bitcoin_price: yup.number(),
    email: yup.string()
        .trim()
        .required()
        .required("Email/Password is required. Please fill out field")
        .email()

})

export default TraderSellFormSchema