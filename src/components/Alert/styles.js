import styled from 'styled-components';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const bgColors = {
  success: 'rgba(82,178,50,0.1)',
  error: 'rgba(211,68,7,0.1)',
  warning: 'rgba(255,183,43,0.1)',
};

const textColors = {
  success: '#135434',
  error: '#d34407',
  warning: '#2c2d2c',
};

const iconColors = {
  success: '#52b232',
  error: '#d34407',
  warning: '#ffb72b',
};

export const Container = styled.View`
  background-color: ${({ type }) => bgColors[type]};
  width: 100%;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 15px;
  padding-vertical: 12px;
`;

export const Icon = styled(MDIcon).attrs({
  color: (props) => iconColors[props.type],
  size: 18,
})`
  color: ${({ type }) => iconColors[type]};
`;

export const Text = styled.Text`
  font-size: 14px;
  color: ${({ type }) => textColors[type]};
  font-family: 'PoppinsMedium';
  margin-left: 8px;
  margin-top: 2px;
  flex: 1;
`;
