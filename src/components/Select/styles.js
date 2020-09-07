import styled from 'styled-components';
import { MaterialIndicator } from 'react-native-indicators';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const Label = styled.Text`
  font-family: 'PoppinsMedium';
  height: 24px;
  color: ${({ theme }) => theme.colors.charcoal};
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  flex: 1;
`;

export const Content = styled.View`
  height: 48px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  padding-right: 12px;
  border-width: 1px;
  border-color: ${({ focused, theme }) =>
    focused ? theme.colors.charcoal : theme.colors.charcoal03};
  background-color: ${(props) => props.theme.colors.white};
`;

export const Icon = styled(Ionicon).attrs({
  size: 24,
  color: '#000000',
})`
  margin-left: 12px;
`;

export const MenuDown = styled(MDIcon).attrs({
  name: 'menu-down',
  color: (props) => props.theme.colors.charcoal,
  size: 24,
})`
  margin-left: 12px;
`;

export const HelperText = styled.Text`
  margin-right: 16px;
  margin-top: 4px;
  font-size: 14px;
  font-family: 'PoppinsMedium';
  color: ${({ theme }) => theme.colors.red};
  align-self: flex-end;
`;

export const Loading = styled(MaterialIndicator).attrs(({ theme }) => ({
  color: theme.colors.charcoal,
  size: 14,
}))`
  width: 24px;
  flex: 0;
  margin-right: 16px;
`;

export const ILabel = styled.Text`
  font-size: 16px;
  font-family: PoppinsBold;
  letter-spacing: 0.53px;
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: 8px;
`;
