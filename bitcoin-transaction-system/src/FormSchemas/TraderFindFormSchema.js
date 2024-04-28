import * as yup from 'yup'


const TraderFindFormSchema = yup.object().shape({
    first_name: yup.string()
        .trim()
    ,
    last_name: yup.string()
        .trim()
    ,
    email: yup.string()
        .trim()
        .required("Email is required. Please fill out field")
        .email("not a valid email")


})

export default TraderFindFormSchema