import styled from 'styled-components';

import { theme } from '~/constants';

const defaultStyles = {
  fontWeight: 'normal',
  color: 'white',
};

export const Type = styled.Text`
  ${defaultStyles}
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-weight: ${props => props.weight};
`;
