import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';

import { Container, Content, SubTitle, Title } from './styles';

function Header({ title, subtitle }) {
  return (
    <Container>
      <Content>
        <Icon name="ios-arrow-round-back" size={30} color="black" />
        <View>
          {subtitle && <SubTitle>{subtitle}</SubTitle>}
          <Title>{title}</Title>
        </View>
      </Content>
      <Icon name="md-close" size={30} color="black" />
    </Container>
  );
}

export default Header;
