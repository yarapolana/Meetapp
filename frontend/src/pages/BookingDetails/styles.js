import styled from 'styled-components';

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 48px;

  div {
    display: flex;

    button:first-child {
      margin-right: 15px;
    }
  }
`;

export const Body = styled.div`
  div {
    overflow: hidden;
    max-height: 300px;
    border-radius: 4px;

    img {
      width: 100%;
    }
  }

  p {
    margin: 25px 0;
  }
`;

export const Footer = styled.div`
  opacity: 0.6;
  display: flex;

  div {
    display: flex;
    align-items: center;
    span {
      margin-top: 3px;
      padding-left: 10px;
    }
  }
  div:first-child {
    padding-right: 30px;
  }
`;
