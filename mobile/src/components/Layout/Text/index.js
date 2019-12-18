import React from 'react';
import PropTypes from 'prop-types';

import { theme } from '~/constants';

import { Type } from './styles';

const Text = ({ children, size, black, faded, bold, ...rest }) => {
  const textColor = [
    black && theme.color.black,
    !black && theme.color.white,
    faded && theme.color.faded,
  ];

  const textWeight = [bold && theme.font.bold, !bold && theme.font.regular];

  return (
    <>
      <Type size={size} color={textColor} weight={textWeight} {...rest}>
        {children}
      </Type>
    </>
  );
};

Text.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.number,
  black: PropTypes.bool,
  bold: PropTypes.bool,
  faded: PropTypes.bool,
};

Text.defaultProps = {
  size: theme.size.body,
  black: false,
  bold: false,
  faded: false,
};

export default Text;
