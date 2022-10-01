import { object, string } from 'yup';

const forgotPasswordSchema = object().shape({
  email: string()
    .required('Email is Required')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Enter a valid email'
    ),
});

export default forgotPasswordSchema;
