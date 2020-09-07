import styled from 'styled-components';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  height: 65px;
  padding: 0 26px;
`;

const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SubTitle = styled.Text`
  margin-left: 35px;
  font-family: 'Poppins';
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.5px;
  opacity: 0.6;
  color: ${(props) => props.theme.colors.charcoal};
`;

const Title = styled.Text`
  margin-left: 35px;
  font-family: 'Poppins';
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.7px;
  color: black;
`;

export { Container, Content, SubTitle, Title };
