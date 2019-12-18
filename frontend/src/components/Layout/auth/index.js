import React from 'react';
import PropTypes from 'prop-types';

import { Container, Body } from './styles';
import Logo from '../logo';

export default function AuthLayout({ children }) {
  return (
    <Container>
      <Body>
        <Logo />
        <small>Meetapp</small>
        {children}
      </Body>
    </Container>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
