import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import api from 'services/api';
import history from 'services/history';

import Button from 'components/Button';
import InputImage from 'components/InputImage';
import InputDate from 'components/InputDate';

import { Body, Top } from './styles';

export default function NewBooking() {
  const SCHEMA = Yup.object().shape({
    file_id: Yup.number()
      .transform(value => (!value ? undefined : value))
      .required('Image is required'),
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    date: Yup.date().required('Date is required'),
    location: Yup.string().required('Location is required'),
  });

  async function handleSubmit(data) {
    try {
      const response = await api.post('bookings', data);
      toast.success('Booking created');

      history.push(`/bookings/${response.data.id}`);
    } catch (err) {
      toast.error('Unable to create booking');
    }
  }

  return (
    <>
      <Top>
        <h3>New Booking</h3>
      </Top>

      <Body>
        <Form schema={SCHEMA} onSubmit={handleSubmit}>
          <InputImage name="file_id" />
          <hr />
          <Input name="title" placeholder="Event title" />
          <Input
            name="description"
            type="text-area"
            placeholder="Event description"
          />
          <InputDate name="date" placeholder="Event date" />
          <Input name="location" placeholder="Event location" />
          <Button form primary icon addIcon>
            <strong>Create</strong>
          </Button>
        </Form>
      </Body>
    </>
  );
}
