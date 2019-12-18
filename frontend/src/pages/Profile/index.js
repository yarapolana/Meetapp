import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { updateProfileRequest } from 'store/modules/user/actions';

import Button from 'components/Button';

import { Body, Top } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const SCHEMA = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Please add a valid email')
      .required('Email is required'),
    password: Yup.string().when('newPassword', (newPassword, field) =>
      newPassword ? field.required('Current password is required') : field
    ),
    newPassword: Yup.string()
      .transform(value => (!value ? null : value))
      .nullable()
      .min(6, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string().when('newPassword', (newPassword, field) =>
      newPassword
        ? field
            .required()
            .oneOf([Yup.ref('newPassword')], 'Password does not match')
        : field
    ),
  });

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <>
      <Top>
        <h1>Profile</h1>
      </Top>
      <Body>
        <Form schema={SCHEMA} initialData={profile} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Full name" />
          <Input name="email" type="email" placeholder="Email" />
          <hr />
          <Input
            name="password"
            type="password"
            placeholder="Current password"
          />
          <Input
            name="newPassword"
            type="password"
            placeholder="New password"
          />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
          />
          <Button form primary icon addIcon>
            Save
          </Button>
        </Form>
      </Body>
    </>
  );
}
