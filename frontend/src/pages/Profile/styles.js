import styled from 'styled-components';

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 48px;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    display: flex;
    width: 100%;

    flex-direction: column;
    align-items: flex-end;

    input {
      width: 100%;
      border: 0;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      font-size: 18px;
      height: 50px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 1);
      }
      &::valid {
        color: rgba(255, 255, 255, 1);
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
      width: 120px;
    }
  }
`;
