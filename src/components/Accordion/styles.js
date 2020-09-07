import styled from 'styled-components';
import { Animated } from 'react-native';
import VerizaIcon from '../VerizaIcon';

export const Container = styled.View`
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.charcoal02};
  border-width: 1px;
`;

export const Header = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  min-height: 48px;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding-horizontal: 20px;
  padding-vertical: 12px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: PoppinsMedium;
  line-height: 24px;
  flex: 1;
  margin-right: 35px;
`;

export const Circle = styled(Animated.View)``;

export const Content = styled.View`
  padding-bottom: 16px;
  padding-left: 20px;
  padding-right: 25px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: PoppinsMedium;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.charcoal08};
`;

export const Icon = styled(VerizaIcon).attrs({
  size: 20,
  name: 'chevron-right-circle',
})``;
