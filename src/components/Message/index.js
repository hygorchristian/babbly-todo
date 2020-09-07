import React from 'react';

import { Container, Text, Content, Triangle } from './styles';

function Message({ text, children }) {
  return (
    <Container>
      <Triangle />
      <Content>
        <Text html={text} />
        {children}
      </Content>
    </Container>
  );
}

export default Message;
