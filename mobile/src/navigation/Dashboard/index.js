import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { format, subDays, addDays } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Booking from '~/components/Booking';
import Button from '~/components/Button';
import { Section, Text } from '~/components/Layout';
import { theme } from '~/constants';
import { Top, Content, EmptyContent, Day } from './styles';

const Dashboard = ({ isFocused }) => {
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const loadBookings = async (selectedPage = 1) => {
    if (selectedPage > 1 && !hasMore) return;

    try {
      const response = await api.get(`bookings?page=${page}&searchDate={date}`);

      setBookings(
        selectedPage > 1
          ? [...bookings, ...response.data.rows]
          : response.data.rows,
      );

      setHasMore(response.data.total_pages > selectedPage);
      setPage(selectedPage);
      setLoading(false);
    } catch (err) {
      console.tron.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      loadBookings();
    }
    // eslint-disable-line
  }, [isFocused, date]);

  const handleDecrementDate = () => {
    setDate(subDays(date, 1));
  };

  const handleIncrementDate = () => {
    setDate(addDays(date, 1));
  };

  const handleSubscribe = async id => {
    try {
      await api.post(`bookings/${id}/subscriptions`);
      Alert.alert('Succcess', 'You have subscribed to this meetup!');
    } catch (error) {
      const message = error.response.data.error;
      Alert.alert('Error', message);
    }
  };

  return (
    <Section>
      <Top>
        <Button icon iconName="chevron-left" go={handleDecrementDate} />
        <Day>{format(date, 'dd/MM/Y')}</Day>
        <Button icon iconName="chevron-right" go={handleIncrementDate} />
      </Top>

      {!loading &&
        (bookings && bookings.length > 0 ? (
          <Content
            data={bookings}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Booking data={item} go={handleSubscribe(item.id)} />
            )}
            onRefresh={loadBookings}
            refreshing={refreshing}
            onEndReached={() => loadBookings(page + 1)}
            onEndReachedThreshold={0.2}
          />
        ) : (
          <EmptyContent>
            <Icon name="event-busy" size={100} color="rgb(255, 255, 255)" />
            <Text>There are no meetups for this date yet.</Text>
          </EmptyContent>
        ))}
    </Section>
  );
};

Dashboard.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name="format-list-bulleted"
      size={theme.size.small - 4}
      color={tintColor}
    />
  ),
};

export default withNavigationFocus(Dashboard);
