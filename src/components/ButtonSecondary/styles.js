import styled from 'styled-components';
import Ripple from 'react-native-material-ripple';
import { MaterialIndicator } from 'react-native-indicators';

export const Container = styled(Ripple).attrs({
  rippleColor: 'rgba(19, 84, 52, 0.15)',
  rippleOpacity: 1,
  rippleDuration: 500,
})`
  background-color: transparent;
  border-radius: 10px;
  height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-width: 1px;
  border-color: ${({ theme, disabled }) =>
    disabled ? 'rgba(19, 84, 52, 0.3)' : theme.colors.greenDarker};
`;

export const Label = styled.Text`
  font-size: 16px;
  font-family: 'PoppinsMedium';
  line-height: 24px;
  color: ${({ theme }) => theme.colors.greenDarker};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`;

export const Loading = styled(MaterialIndicator).attrs({
  color: '#135434',
  size: 23,
})``;
