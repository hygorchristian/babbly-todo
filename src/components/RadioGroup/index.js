import React from 'react';
import Radio from '../Radio';

import { Container } from './styles';

function RadioGroup({ options, value, onChange }) {
  const handlePress = (option) => {
    onChange(option.value);
  };

  return (
    <Container>
      {options.map((option) => (
        <Radio
          option={option}
          onPress={() => handlePress(option)}
          value={value}
        />
      ))}
    </Container>
  );
}

export default RadioGroup;
