import styled from 'styled-components';

import Button from '../Button';

export const Container = styled.View`
  border-radius: 4px;
`;

export const Content = styled.View`
  padding: 20px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 140px;
`;

export const Touchable = styled(Button)`
  height: 40px;
`;
