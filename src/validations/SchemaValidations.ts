import * as Yup from 'yup'
export const validationSchema =[
    Yup.object().shape({
        email  : Yup.string().required("Email is required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email address"),
        password : Yup.string().required("Password is empty").min(8, "Length should be more than 8").matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    }),
    Yup.object().shape({
        firstName : Yup.string().required('First name is required').matches(/^[a-zA-Z' -]+$/, "Only letters are allowed"),
        lastName : Yup.string().required('Last name Required').matches(/^[a-zA-Z' -]+$/, "Only letters are allowed")
    }),
    Yup.object().shape({
        street : Yup.string().required("Street Required").matches(/^[a-zA-Z' -]+$/, "Only letters are allowed in street"),
        city : Yup.string().required("City Required").matches(/^[a-zA-Z' -]+$/, "Only letters are allowed in City")
    })
];