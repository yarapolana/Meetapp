import styled from 'styled-components';

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 28px;
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

  form {
    display: flex;
    width: 100%;

    flex-direction: column;
    align-items: flex-end;

    input,
    textarea {
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

    textarea {
      resize: none;
      height: 200px;
      padding: 15px;
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
      /* height: 50px; */
      /* width: 120px; */
    }
  }

  p {
    margin: 25px 0;
  }
`;
