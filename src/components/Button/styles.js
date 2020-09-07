import styled from 'styled-components';
import Ripple from 'react-native-material-ripple';
import { MaterialIndicator } from 'react-native-indicators';

const getBgColor = (props) => {
  if (props.disabled && !props.loading) {
    return props.theme.colors.greenLighter;
  }

  return props.theme.colors.green;
};

export const Container = styled(Ripple).attrs({
  rippleColor: '#52b232',
  rippleOpacity: 1,
  rippleDuration: 500,
})`
  background-color: ${(props) => getBgColor(props)};
  border-radius: 10px;
  height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-family: 'PoppinsMedium';
  line-height: 24px;
  color: ${({ theme }) => theme.colors.charcoal};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const Loading = styled(MaterialIndicator).attrs(({ theme }) => ({
  color: theme.colors.charcoal,
  size: 23,
}))``;
