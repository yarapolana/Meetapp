import React, { useState, useEffect } from 'react';
import { ImpulseSpinner } from 'react-spinners-kit';
import { format, parseISO } from 'date-fns';

import api from 'services/api';
import history from 'services/history';

import Button from 'components/Button';
import { Top, Body, BookingList } from './styles';

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBookings() {
      const response = await api.get('organizer');

      const data = response.data.map(booking => {
        return {
          ...booking,
          dateFormatted: format(parseISO(booking.date), "dd.MM.Y - HH'h'"),
        };
      });

      setBookings(data);
      setLoading(false);
    }

    loadBookings();
  }, []);

  function handleNew() {
    history.push('/new');
  }

  return (
    <>
      <Top>
        <h1>My Bookings</h1>
        <Button primary icon addIcon go={handleNew}>
          <span>New Booking</span>
        </Button>
      </Top>

      <Body>
        <BookingList>
          {!loading &&
            bookings.map(booking => (
              <Button
                iconRight
                chevronIcon
                link
                key={booking.id}
                id={booking.id}
                to={`/bookings/${booking.id}`}
                past={booking.past ? 1 : 0}
              >
                <div>
                  <strong>{booking.title}</strong>
                  <span>{booking.dateFormatted}</span>
                </div>
              </Button>
            ))}
        </BookingList>
        <ImpulseSpinner
          frontColor="#FFFFFF"
          backColor="#FFFFFF"
          size={40}
          loading={loading}
        />
      </Body>
    </>
  );
}
