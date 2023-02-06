import { useDispatch } from 'react-redux';
import { Label, Input, Button, ErrorText } from './RegisterForm.styled';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { register } from 'redux/auth/operations';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

let schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      nameRegExp,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  email: yup.string().email('Email is incorrect').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(30, 'Password must be 30 characters max'),
});

const initialValues = { name: '', email: '', password: '' };

export const RegisterForm = () => {
  const dispatch = useDispatch();

  // const handleSubmit = (value, { resetForm }) => {
  const handleSubmit = value => {
    dispatch(register(value));
    // resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input type="text" name="name" />
          <ErrorText name="name" component="div" />
        </Label>
        <Label htmlFor="email">
          Email
          <Input type="text" name="email" />
          <ErrorText name="email" component="div" />
        </Label>
        <Label htmlFor="password">
          Password
          <Input type="text" name="password" />
          <ErrorText name="password" component="div" />
        </Label>
        <Button type="submit">Register</Button>
      </Form>
    </Formik>
  );
};
