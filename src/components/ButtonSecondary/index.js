import React from 'react';

import { Container, Label, Loading } from './styles';

function Button({ children, loading, disabled, ...props }) {
  return (
    <Container loading={loading} disabled={loading || disabled} {...props}>
      {loading ? <Loading /> : <Label disabled={disabled}>{children}</Label>}
    </Container>
  );
}

export default Button;
