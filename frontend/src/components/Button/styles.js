import styled from 'styled-components';

import { theme } from 'constants/index';

// default background and opacity
const buttonStyles = {
  background: 'transparent',
  fontSize: theme.size.body,
  marginTop: 0,
  opacity: 1,
};

export const Container = styled.button`
  ${buttonStyles};
  background: ${props => props.bg};
  transition: all 0.2s;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;

  &:hover {
    opacity: 0.7;
  }

  strong {
    color: ${theme.color.white};
    font-size: ${props => props.t}px;
    font-weight: bold;
    letter-spacing: -0.2px;
    opacity: ${props => props.op};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  svg {
    margin-right: 7px;
  }

  p {
    color: ${theme.color.white};
    font-size: ${props => props.t}px;
    font-weight: bold;
    letter-spacing: -0.1px;
    padding: 10px 20px;
  }
`;

export const LinkContainer = styled.div`
  color: ${theme.color.white};
  font-size: 16px;
  font-weight: bold;
  opacity: 0.8;
  margin-top: ${props => props.top}px;
`;
