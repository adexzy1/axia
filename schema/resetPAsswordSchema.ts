import { object, string, ref } from 'yup';

const resetPasswordSchema = object().shape({
  password: string()
    .required('Password is required')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/g,
      'Password must contain:'
    ),
  confirmPassword: string().oneOf(
    [ref('password'), null],
    'Passwords must match'
  ),
});

export default resetPasswordSchema;
