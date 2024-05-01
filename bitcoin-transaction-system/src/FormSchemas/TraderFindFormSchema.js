import * as yup from 'yup'

const TraderFindFormSchema = yup.object().shape({
    first_name: yup.number()
        .trim(),
    last_name: yup.number()
        .trim(),
    email: yup.string()
        .trim()
        .required("Email/Password is required. Please fill out field")
        .email("not a vaild email")

})

export default TraderFindFormSchema