import * as yup from 'yup'
import 'yup-phone';

const SignupFormSchema = yup.object().shape({
    first_name: yup.string()
        .trim()
        .required("First Name is required")
        .max(20, "A maximum of 20 characters for a first name is supported"),
    last_name: yup.string()
        .trim()
        .required("Last Name is required")
        .max(20, "A maximum of 20 characters for last name is supported"),
    phone_num: yup.string()
        .trim()
        .phone("Please enter a valid phone number ex(214)-xxx-xxxx")
        .required("Phone number is required"),
    cell_num: yup.string()
        .trim()
        .phone("Please enter a valid cell phone number")
        .required("Cell phone number is required"),
    street_addr: yup.string()
        .trim()
        .required("Street address is required. Please fill out field")
        .max(20, "Address with 20 characters supported"),
    city: yup.string()
        .trim()
        .required("City is required. Please fill out field")
        .max(20, "Cities with 20 characters supported"),
    state: yup.string()
        .trim()
        .required("State is required. Please select a state."),
    user_type: yup.boolean()
        .required("Please select a user type")
        .oneOf(['Client', 'Trader'], "User type must be either 'Client' or 'Trader'"),
    email: yup.string()
        .trim()
        .required("Email is required. Please fill out field")
        .email("not a valid email")
        .max(30, "only email addresses with 30 characters supported"),
    password: yup.string()
        .trim()
        .required("password is required. Please fill out field")
        .min(5, "A minimum of 5 characters is required for password"),
    zip_code: yup.string()
    .trim()
    .required("Please enter a zip code")
    .min(5)
})

export default SignupFormSchema;