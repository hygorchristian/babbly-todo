import React from 'react';

import { Container, Text, Icon } from './styles';

const icons = {
  success: 'check-circle',
  error: 'alert',
  warning: 'information',
};
function Alert({ type, visible, children, ...props }) {
  if (!visible) return false;

  return (
    <Container type={type} {...props}>
      <Icon type={type} name={icons[type]} />
      <Text type={type}>{children}</Text>
    </Container>
  );
}

export default Alert;
