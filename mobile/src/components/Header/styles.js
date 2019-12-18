import styled from 'styled-components';

import Logo from '../Layout/Logo';
import { theme } from '~/constants';

export const Container = styled.SafeAreaView.attrs({
  elevation: 2,
})`
  background: ${theme.color.header};
  justify-content: flex-end;
  align-items: center;
`;

export const Brand = styled(Logo)`
  margin-bottom: 10px;
`;
