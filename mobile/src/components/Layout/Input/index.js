import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Container, TextArea, TextInput, Error } from './styles';

const Input = ({ error, ...rest }, ref) => {
  return (
    <Container>
      <TextArea>
        <TextInput {...rest} ref={ref} />
      </TextArea>
      {error ? <Error>{error}</Error> : null}
    </Container>
  );
};

export default forwardRef(Input);

Input.propTypes = {
  error: PropTypes.string,
};

Input.defaultProps = {
  error: null,
};
