import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

import {
  Container,
  Circle,
  Content,
  Title,
  Text,
  Header,
  Icon,
} from './styles';
import { rotate, rotation } from './animations';

function Accordion({ title, children, ...props }) {
  const [open, setOpen] = useState(false);
  const [anim] = useState(new Animated.Value(0));

  const toggleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    rotate(anim, open);
  }, [open]);

  return (
    <Container {...props}>
      <Header onPress={toggleOpen}>
        <Title>{title}</Title>
        <Circle style={[rotation(anim)]}>
          <Icon />
        </Circle>
      </Header>
      {open && (
        <Content>
          <Text>{children}</Text>
        </Content>
      )}
    </Container>
  );
}

export default Accordion;
