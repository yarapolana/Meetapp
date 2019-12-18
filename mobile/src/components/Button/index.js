import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Text } from '../Layout';
import { Container } from './styles';

import { theme } from '~/constants';

const Button = ({
  children,
  loading,
  primary,
  icon,
  iconName,
  go,
  ...props
}) => {
  const bg = [primary && theme.color.primary, !primary && 'transparent'];

  if (icon) {
    return (
      <Container style={{ width: undefined }} bg={bg} onPress={go} {...props}>
        <Icon name={iconName} size={25} color="#ffffff" />
      </Container>
    );
  }
  return (
    <Container bg={bg} onPress={go} {...props}>
      {loading ? (
        <ActivityIndicator size="small" color="#ffffff" />
      ) : primary ? (
        <Text bold>{children}</Text>
      ) : (
        <Text bold faded size={16}>
          {children}
        </Text>
      )}
    </Container>
  );
};

Button.propTypes = {
  go: PropTypes.func.isRequired,
  children: PropTypes.string,
  icon: PropTypes.bool,
  iconName: PropTypes.string,
  loading: PropTypes.bool,
  primary: PropTypes.bool,
};

Button.defaultProps = {
  icon: false,
  children: '',
  iconName: '',
  loading: false,
  primary: false,
};

export default Button;
