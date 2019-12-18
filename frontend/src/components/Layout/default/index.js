import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import { Container, Body } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Container>
      <Header />
      <Body>{children}</Body>
    </Container>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
