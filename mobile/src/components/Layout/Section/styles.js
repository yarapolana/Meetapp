import styled from 'styled-components';

import Logo from '../Logo';

export const Container = styled.View`
  height: 100%;
  padding: 20px;
  background-color: #3d2842;
`;

export const SessionContainer = styled.View`
  height: 100%;
  padding: 0 20px;
  background-color: #3d2842;
  justify-content: center;
  align-items: center;
`;

// replace background color with gradient

export const Brand = styled(Logo)`
  margin-bottom: 50px;
`;
