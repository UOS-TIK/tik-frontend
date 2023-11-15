import styled from "styled-components";

export const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: fit-content;
  align-items: center;
`;

export const IconImage = styled.img`
  width: 40px;
`;

export const Description = styled.div`
  color: ${(props) => `${props.color}`};
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.4px;
`;

export const InnerStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
