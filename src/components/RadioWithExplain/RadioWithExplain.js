import { RadioExplain, RadioIcon, RadioInput, RadioTitle, RadioWrapper, Wrapper } from "./style";

const RadioWithExplain = ({ name, value, explain, checked, onChange, children }) => {
  return (
    <Wrapper>
      <RadioWrapper checked={checked}>
        <RadioInput
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <RadioIcon checked={checked}/>
        <RadioTitle checked={checked}>{children}</RadioTitle>
        <RadioExplain checked={checked}>
          {explain.length > 45
            ? `${explain.slice(0, 45)}...`
            : explain}
        </RadioExplain>
      </RadioWrapper>
    </Wrapper>
  );
};

export default RadioWithExplain;










