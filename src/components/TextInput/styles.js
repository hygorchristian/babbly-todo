import styled from 'styled-components';
import { MaterialIndicator } from 'react-native-indicators';
import { TextInputMask } from 'react-native-masked-text';
import VerizaIcon from '../VerizaIcon';

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const InputContainer = styled.View`
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

export const Icon = styled(VerizaIcon).attrs({
  size: 16,
})`
  margin-left: 12px;
  color: ${({ theme }) => theme.colors.charcoal04};
`;

export const Input = styled.TextInput.attrs({
  textAlignVertical: 'center',
  selectionColor: ({ theme }) => theme.colors.red,
})`
  flex: 1;
  font-family: 'PoppinsMedium';
  height: 100%;
  color: ${({ theme }) => theme.colors.charcoal};
  font-size: 16px;
  line-height: 24px;
  margin: 0;
`;

export const MaskInput = styled(TextInputMask).attrs({
  textAlignVertical: 'center',
  selectionColor: 'red',
})`
  flex: 1;
  font-family: 'PoppinsMedium';
  height: 100%;
  color: ${({ theme }) => theme.colors.charcoal};
  font-size: 16px;
  line-height: 24px;
  overflow: hidden;
  align-self: center;
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

export const Label = styled.Text`
  font-size: 16px;
  font-family: PoppinsBold;
  letter-spacing: 0.53px;
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: 8px;
`;
