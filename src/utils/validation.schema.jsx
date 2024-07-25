import * as yup from 'yup'


const emailOrStringValidator = yup.string().test(
  'is-email-or-string',
  'The field must be a valid email or a non-empty string',
  function (value) {
    const { path, createError } = this;

    const isValidEmail = yup.string().email().isValidSync(value);

    const isValidString = yup.string().required().isValidSync(value);

    if (!isValidEmail && !isValidString) {
      return createError({
        path,
        message: 'The field must be a valid email or a non-empty string',
      });
    }

    return true;
  }
);



export const login_Schema = yup.object().shape({
  info:  emailOrStringValidator.required('The field is required'),
  password: yup.string().required("**Password is required"),
});


// export const login_Schema = yup.object().shape({
//   info: yup
//     .string()
//     .required("**Email or username is required")
//     .email("Enter a valid email"),
//   password: yup.string().required("**Password is required"),
// });




export const register_Schema = yup.object().shape({
  name: yup.string().required("**Name is required"),
  username: yup.string().required("**Username is required"),
  email: yup
    .string()
    .required("**Email is required")
    .email("Enter a valid email"),
  password: yup.string().required("**Password is required"),
});



