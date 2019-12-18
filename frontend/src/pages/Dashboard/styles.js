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
  margin-bottom: 5%;
`;

export const BookingList = styled.ul`
  width: 100%;
  button {
    width: 100%;
    height: 62px;
    flex: 1;
    margin: 10px 0;
    background: rgba(0, 0, 0, 0.2);
    justify-content: space-between;

    div {
      display: flex;
      flex: 1;
      justify-content: space-between;
      margin: 0 10px;

      span {
        opacity: 0.6;
      }
    }

    svg {
    }
  }
`;
