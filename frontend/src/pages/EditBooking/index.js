import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { ImpulseSpinner } from 'react-spinners-kit';

import api from 'services/api';
import history from 'services/history';

import Button from 'components/Button';
import InputImage from 'components/InputImage';
import InputDate from 'components/InputDate';

import { Body, Top } from './styles';

export default function EditBooking({ match }) {
  const { id } = match.params;

  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState({});
  const [file, setFile] = useState({});

  useEffect(() => {
    async function loadBooking() {
      try {
        const response = await api.get(`bookings/${id}`);

        const data = {
          ...response.data,
          dateFormatted: format(
            parseISO(response.data.date),
            "dd.MM.Y - HH'h'"
          ),
        };

        setFile(data.file);
        setBooking(data);
        setLoading(false);
      } catch (err) {
        toast.error('Booking not found');
        history.push('/');
      }
    }

    loadBooking();
  }, [id]);

  const schema = Yup.object().shape({
    file_id: Yup.number()
      .transform(value => (!value ? undefined : value))
      .required('Image is required'),
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    date: Yup.date().required('Date is required'),
    location: Yup.string().required('Location is required'),
  });

  async function handleSubmit(data) {
    console.tron.log(booking);
    try {
      setLoading(true);
      await api.put(`bookings/${id}`, data);
      toast.success('Meetup edited successfully!');
      history.push(`/bookings/${id}`);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  }

  return (
    <>
      <Top>
        <h3>Edit Booking</h3>
      </Top>

      <Body>
        <Form schema={schema} initialData={booking} onSubmit={handleSubmit}>
          <InputImage name="file_id" />
          <hr />
          <Input name="title" placeholder="Event Title" />
          <Input name="description" placeholder="Event Description" multiline />
          <InputDate name="date" type="date" placeholder="Event Date" />
          <Input name="location" placeholder="Event Location" />
          <Button primary icon addIcon disabled={loading}>
            <strong>Save</strong>
          </Button>
        </Form>
      </Body>
    </>
  );
}

EditBooking.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
