import styled from 'styled-components';
import { Dimensions } from 'react-native';

import { theme } from '~/constants';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const TextArea = styled.View`
  height: 50px;
  width: ${width - 40};
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: ${theme.size.body};
  justify-content: center;
  padding-left: 20px;
  color: ${theme.color.white};
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.4)',
})`
  font-size: ${theme.size.body};
  color: ${theme.color.white};

  align-items: center;
`;

export const Error = styled.Text`
  padding-top: 5px;
  letter-spacing: 0.5;
  font-size: ${theme.size.caption};
  color: ${theme.color.error};
`;
