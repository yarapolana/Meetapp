import React from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { signUpRequest } from 'store/modules/auth/actions';

import Button from 'components/Button';

const SCHEMA = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Please add a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be min 8 characters')
    .required('Password is required'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <Form schema={SCHEMA} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Button form primary>
          Create Account
        </Button>
      </Form>
      <Button link op={0.6} t={16} top={20} to="/">
        Already have an account?
      </Button>
    </>
  );
}
