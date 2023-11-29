import styled from 'styled-components';

export const RadioWrapper = styled.label`
  display: inline-block;
  margin-right: 4px;
  cursor: pointer;
  position: relative;
  padding-left: 20px;
  font-weight: 700;
  color: ${(props) => (props.checked ? '#1C1C1CD9' : '#1C1C1C99')};
`;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + span:after {
    display: block;
  }
`;

export const RadioIcon = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  border: 1.5px solid ${props => props.checked ? '#3D4371' : '#3D437199'};
  background-color: #fff;

  &:after {
    content: '';
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #3D4371;
  }
`;