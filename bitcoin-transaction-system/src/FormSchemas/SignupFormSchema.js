import * as yup from 'yup'
import 'yup-phone'

const SignupFormSchema = yup.object().shape({
    firstName: yup.string()
        .trim()
        .required("First Name is required")
        .max(20, "A maximum of 20 characters for a first name is supported"),
    lastName: yup.string()
        .trim()
        .required("Last Name is required")
        .max(20, "A maximum of 20 characters for last name is supported"),
    phoneNumber: yup.string()
        .trim()
        .required("Phone number is required")
        .phone(),
    cellNumber: yup.string()
        .trim()
        .required("Cell phone number is required")
        .phone(),
    streetAddress: yup.string()
        .trim()
        .required("Street address is required. Please fill out field")
        .max(20, "Address with 20 characters supported")
    ,
    city: yup.string()
        .trim()
        .required("City is required. Please fill out field")
        .max(20, "Cities with 20 characters supported"),
    state: yup.string()
        .trim()
        .required("State is required. Please select a state."),
    userType: yup.boolean()
        .required("Please select a user type"),
    email: yup.string()
        .trim()
        .required("Email is required. Please fill out field")
        .email("not a valid email")
        .max(30, "only email addresses with 30 characters supported"),
    password: yup.string()
        .trim()
        .required("password is required. Please fill out field")
        .min(5, "A minimum of 5 characters is required for password")
})

export default SignupFormSchema;