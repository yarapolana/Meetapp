import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../Header';

import { Container, SessionContainer, Brand } from './styles';

const Section = ({ children, session }) => {
  if (session) {
    return (
      <SessionContainer>
        <Brand />
        {children}
      </SessionContainer>
    );
  }

  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Section;

Section.propTypes = {
  session: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Section.defaultProps = {
  session: false,
};
