import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import { ImpulseSpinner } from 'react-spinners-kit';

import api from 'services/api';
import history from 'services/history';

import Button from 'components/Button';
import { icons } from 'constants/index';
import { Body, Top, Footer } from './styles';

export default function BookingDetails({ match }) {
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
        // force user back if no booking was found
        history.push('/');
      }
    }

    loadBooking();
  }, [id]);

  async function handleEdit() {
    history.push(`/edit/${id}`);
  }

  async function handleCancel() {
    try {
      await api.delete(`bookings/${id}`);
      toast.success('Booking deleted');
    } catch (err) {
      toast.error('Unable to delete booking');
    }
  }

  return (
    <>
      {!loading && (
        <>
          <Top>
            <h1>{booking.title}</h1>
            <div>
              <Button accent editIcon icon go={handleEdit}>
                <span>Edit</span>
              </Button>
              <Button primary deleteIcon icon go={handleCancel}>
                <span>Cancel</span>
              </Button>
            </div>
          </Top>

          <Body>
            <div>
              <img src={file.url} alt={booking.title} />
            </div>

            <p>{booking.description}</p>
          </Body>
          <Footer>
            <div>
              {icons.eventIcon} <span>{booking.dateFormatted}</span>
            </div>
            <div>
              {icons.placeIcon} <span>{booking.location}</span>
            </div>
          </Footer>

          <ImpulseSpinner
            frontColor="#FFFFFF"
            backColor="#FFFFFF"
            size={40}
            loading={loading}
          />
        </>
      )}
    </>
  );
}

BookingDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
