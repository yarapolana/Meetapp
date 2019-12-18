import styled from 'styled-components';

export const Top = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

export const Content = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Day = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin: 0 15px;
`;

export const EmptyContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 25% 0;
`;
