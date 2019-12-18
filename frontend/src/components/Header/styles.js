import styled from 'styled-components';

export const Container = styled.div`
  height: 92px;
  background: rgba(0, 0, 0, 0.3);
  padding: 0 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  text-align: right;

  div {
    opacity: 1;
    padding: 0 0 5px !important;
    display: flex !important;
    flex: 1;
    flex-direction: row !important;
    justify-content: flex-end;
  }

  span {
    font-size: 14px;
    opacity: 0.7;
  }

  button {
    padding: 0;
  }
`;
