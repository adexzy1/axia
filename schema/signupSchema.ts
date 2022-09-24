import { object, string } from 'yup';

const signupSchema = object()
  .shape({
    username: string().required('username name is Required'),

    email: string()
      .required('Email is Required')
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Enter a valid email'
      ),

    password: string()
      .required('Password is required')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/g,
        'Password must contain:'
      ),
  })
  .required();

export default signupSchema;
