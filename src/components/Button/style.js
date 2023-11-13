import styled from "styled-components";
import { ButtonFeature, ButtonColor } from "./Button";

export const ButtonStyle = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16.5px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.feature === ButtonFeature.NONE
      ? `${props.color}80`
      : `${props.color}00`};
  border-width: ${(props) =>
    props.feature === ButtonFeature.LINE ? "1px" : "0px"};
  border-style: solid;
  border-color: ${(props) => `${props.color}`};
  color: ${(props) =>
    props.feature === ButtonFeature.LINE && props.color !== ButtonColor.WHITE
      ? `${props.color}`
      : "#ffffff"};
  letter-spacing: -1.68px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    transition: all 0.05s ease-in-out;
    background-color: ${(props) =>
      props.feature === ButtonFeature.NONE
        ? `${props.color}A6`
        : `${props.color}26`};
  }
  &:active {
    transition: all 0.05s ease-in-out;
    background-color: ${(props) =>
      props.feature === ButtonFeature.NONE
        ? `${props.color}CC`
        : `${props.color}4D`};
  }
`;

export const ButtonFlexibleStyle = styled.button`
  display: inline-flex;
  padding: 6px 10px;
  font-size: 12px;
  border-radius: 8px;
  background-color: rgba(68, 68, 68, 0.1);
  color: rgba(68, 68, 68, 0.7);
  height: fit-content;

  letter-spacing: -1.2px;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  border: none;

  &:hover {
    transition: all 0.05s ease-in-out;
    background-color: rgba(68, 68, 68, 0.25);
  }
  &:active {
    transition: all 0.05s ease-in-out;
    background-color: rgba(68, 68, 68, 0.4);
  }
`;
