import React, { useState } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Picker from 'react-native-picker-select';

import {
  Container,
  Content,
  Label,
  Icon,
  Loading,
  HelperText,
  MenuDown,
  ILabel,
} from './styles';

function Select({
  style,
  placeholder = 'Selecione',
  icon,
  error,
  warning,
  loading,
  helperText,
  items,
  onValueChange,
  label,
  ...props
}) {
  const [_label, _setLabel] = useState(placeholder);

  const handleChange = (val, index) => {
    onValueChange(val, index);
    _setLabel(index - 1 >= 0 ? items[index - 1].label : placeholder);
  };

  return (
    <Container style={style}>
      {label && <ILabel>{label}</ILabel>}
      <Picker
        {...props}
        items={items}
        onValueChange={handleChange}
        placeholder={{ label: placeholder, value: null }}
      >
        <Content>
          {icon && <Icon name={icon} />}
          <Label style={{ marginLeft: icon ? 8 : 16 }}>{_label}</Label>
          {error && (
            <Ionicon size={24} name="ios-close" style={{ color: '#d34407' }} />
          )}
          {warning && (
            <Ionicon size={24} name="ios-alert" style={{ color: '#d34407' }} />
          )}
          {loading && <Loading />}
          <MenuDown />
        </Content>
      </Picker>
      {error && <HelperText>{helperText}</HelperText>}
      {warning && <HelperText>{helperText}</HelperText>}
    </Container>
  );
}

export default Select;
