import * as yup from 'yup'


export const login_Schema = yup.object().shape({
    info: yup.string().required('Email or username is required'),
    password: yup.string().required('Password is required')
})



export const register_Schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    username: yup.string().required('Username is required'),
    email: yup.string().required('Email is required').email('Enter a valid email'),
    password: yup.string().required('Password is required')
})