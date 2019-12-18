import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img``;

export const Body = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    input {
      border: 0;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      font-size: 18px;
      height: 50px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }
    }
    span {
      color: #fb6f9f;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
      font-size: 14px;
    }
    button,
    a {
      margin: 5px 0 0;
      height: 50px;
    }
  }

  small {
    font-size: 12px;
    opacity: 0.5;
    display: block;
  }
`;
