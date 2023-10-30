import React from 'react';
import { RadioIcon, RadioInput, RadioWrapper } from './style';

const RadioButton = ({ name, value, checked, onChange, children }) => {
  return (
    <RadioWrapper checked={checked}>
      <RadioInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <RadioIcon checked={checked}/>
      {children}
    </RadioWrapper>
  );
};

export default RadioButton;
