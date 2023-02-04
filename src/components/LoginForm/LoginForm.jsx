import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { Label, Input, Button, ErrorText } from './LoginForm.styled';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

let schema = yup.object().shape({
  email: yup.string().email('Email is incorrect').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const initialValues = { email: '', password: '' };

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    dispatch(addContact(value));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
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
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
