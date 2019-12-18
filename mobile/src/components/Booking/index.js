import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../Layout';
import { Container, Image, Content, Touchable } from './styles';

const Booking = ({ data, handleSubscribe, handleCancel }) => {
  return (
    <Container>
      <Image
        source={{
          uri: data.file && data.file.url,
        }}
      />
      <Content>
        <Text>{data.title}</Text>
        <Touchable primary>Subscribe</Touchable>
      </Content>
    </Container>
  );
};

export default Booking;

Booking.propTypes = {
  data: PropTypes.shape({
    past: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    file: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  handleSubscribe: PropTypes.func,
  handleCancel: PropTypes.func,
};

Booking.defaultProps = {
  handleSubscribe: null,
  handleCancel: null,
};
