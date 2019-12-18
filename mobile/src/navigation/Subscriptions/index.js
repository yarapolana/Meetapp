import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Booking from '~/components/Booking';
import { Section, Text } from '~/components/Layout';
import { theme } from '~/constants';
import { Content, EmptyContent } from './styles';

const Subscriptions = ({ isFocused }) => {
  const [loading, setLoading] = useState(true);
  const [subscriptions, setSubscriptions] = useState([]);

  const loadSubscriptions = async () => {
    setLoading(true);

    try {
      const response = await api.get('subscriptions');

      setSubscriptions(response.data);
      setLoading(false);
    } catch (err) {
      console.tron.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      loadSubscriptions();
    }
  }, [isFocused]);

  const handleCancelSubscription = async id => {
    try {
      await api.post(`subscription/${id}`);
      Alert.alert('Succcess', 'You have subscribed to this meetup!');
      loadSubscriptions();
    } catch (err) {
      const message = err.response.data.error;
      Alert.alert('Error', message);
    }
  };

  return (
    <Section>
      {!loading &&
        (subscriptions && subscriptions.length ? (
          <Content
            data={subscriptions}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Booking data={item} go={handleCancelSubscription(item.id)} />
            )}
            onRefresh={loadSubscriptions}
          />
        ) : (
          <EmptyContent>
            <Icon name="event-busy" size={100} color="rgb(255, 255, 255)" />
            <Text>There are no subscriptions found.</Text>
          </EmptyContent>
        ))}
    </Section>
  );
};

Subscriptions.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" color={tintColor} size={theme.size.small - 4} />
  ),
};

export default withNavigationFocus(Subscriptions);
