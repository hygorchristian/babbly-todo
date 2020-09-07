import styled from 'styled-components';

export const Container = styled.ScrollView`
  padding-top: 100px;
  padding-horizontal: 20px;
`;

export const List = styled.View`
  margin-top: 20px;
  flex: 1;
  width: 100%;
`;

export const TodoItem = styled.TouchableOpacity`
  height: 48px;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding-horizontal: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #c9c9c9;
  background-color: ${({ done }) => done ? 'green' : 'white'};
`;

export const TodoTitle = styled.Text`
  
`;

export const PaginationController = styled.View`
  flex-direction: row;
`;


