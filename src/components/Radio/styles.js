import styled from 'styled-components';
import Ripple from 'react-native-material-ripple';

export const Container = styled(Ripple)`
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.charcoal03};
  padding-vertical: 12px;
  padding-horizontal: 16px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;

export const Circle = styled.View`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.charcoal08};
`;

export const Label = styled.Text`
  margin-left: 12px;
  flex: 1;
  font-size: 16px;
  font-family: PoppinsMedium;
  color: ${({ theme }) => theme.colors.charcoal};
`;
