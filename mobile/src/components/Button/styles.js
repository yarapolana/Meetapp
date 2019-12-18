import styled from 'styled-components';
import { Dimensions, ActivityIndicator } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export const Container = styled(RectButton)`
  background: ${props => props.bg};
  padding: 10px 20px;
  width: ${width - 40};
  margin: 5px 0;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const Indicator = styled(ActivityIndicator)`
  padding: 16px 0;
`;
