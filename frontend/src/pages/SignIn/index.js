import React from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from 'store/modules/auth/actions';

import Button from 'components/Button';

const SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email('Please add a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be min 8 characters')
    .required('Password is required'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Form schema={SCHEMA} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="meetapp@meetapp.com" />
        <Input name="password" type="password" placeholder="*******" />

        <Button form primary>
          Login
        </Button>

        <Button link top="20" to="/signup">
          Create free account
        </Button>
      </Form>
    </>
  );
}
