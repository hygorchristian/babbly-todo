import React, { useState } from 'react';
import { withTheme } from 'styled-components';
import VerizaIcon from '../VerizaIcon';

import {
  Container,
  Icon,
  Input,
  HelperText,
  InputContainer,
  Loading,
  MaskInput,
  Label,
} from './styles';

function TextInput({
  error,
  warning,
  helperText,
  loading,
  style,
  icon,
  type,
  theme,
  label,
  inputStyle,
  success,
  reference,
  ...props
}) {
  const [focused, setFocused] = useState(false);

  return (
    <Container style={style}>
      {label && <Label>{label}</Label>}
      <InputContainer focused={focused} style={inputStyle}>
        {icon && <Icon name={icon} />}
        {type ? (
          <MaskInput
            ref={reference}
            type={type}
            style={{ marginLeft: icon ? 8 : 16 }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...props}
          />
        ) : (
          <Input
            ref={reference}
            style={{ marginLeft: icon ? 8 : 16 }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...props}
          />
        )}
        {error && (
          <VerizaIcon size={10} name="close" color={theme.colors.red} />
        )}
        {warning && (
          <VerizaIcon size={12} name="warning" color={theme.colors.red} />
        )}
        {success && (
          <VerizaIcon size={14} name="check" color={theme.colors.greenDark} />
        )}
        {loading && <Loading />}
      </InputContainer>
      {error && <HelperText>{helperText}</HelperText>}
      {warning && <HelperText>{helperText}</HelperText>}
    </Container>
  );
}

export default withTheme(TextInput);
