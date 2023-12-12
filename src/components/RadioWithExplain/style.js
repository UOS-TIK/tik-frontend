import styled from 'styled-components';


export const Wrapper = styled.div`
  padding: 5px;
`;

export const RadioWrapper = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
  padding-left: 20px;
`;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  &:checked + div:after {
    display: block;
  }
`;

export const RadioIcon = styled.div`
  position: absolute;
  left: 0;
  height: 14px;
  width: 14px;
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
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #3D4371;
  }
`;

export const RadioTitle = styled.div`
  margin-left: 30px;
  min-width: 150px;
  font-weight: 700;
  color: ${(props) => (props.checked ? '#1C1C1CD9' : '#1C1C1C99')};
`;

export const RadioExplain = styled.div`
  color: ${(props) => (props.checked ? '#1C1C1CB2' : '#1C1C1C80')};
`;

