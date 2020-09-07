import React from 'react';
import { withTheme } from 'styled-components';
import VerizaIcon from '../VerizaIcon';

import { Container, Label, Circle } from './styles';

function Radio({ value, option, theme, ...props }) {
  return (
    <Container {...props}>
      {value === option.value && (
        <VerizaIcon
          name="check-circle"
          color={theme.colors.greenDark}
          size={24}
        />
      )}
      {value !== option.value && <Circle />}
      <Label>{option.label}</Label>
    </Container>
  );
}

export default withTheme(Radio);
