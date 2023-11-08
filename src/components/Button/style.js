import styled from "styled-components";
import { Feature, Color } from "./Button";

export const ButtonStyle = styled.button`
  transition: all 0.05s ease-in-out;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16.5px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.feature === Feature.NONE ? `${props.color}80` : `${props.color}00`};
  border-width: ${(props) => (props.feature === Feature.LINE ? "1px" : "0px")};
  border-style: solid;
  border-color: ${(props) => `${props.color}`};
  color: ${(props) =>
    props.feature === Feature.LINE && props.color !== Color.WHITE
      ? `${props.color}`
      : "#ffffff"};
  letter-spacing: -1.68px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    transition: all 0.05s ease-in-out;
    background-color: ${(props) =>
      props.feature === Feature.NONE ? `${props.color}A6` : `${props.color}26`};
  }
  &:active {
    transition: all 0.05s ease-in-out;
    background-color: ${(props) =>
      props.feature === Feature.NONE ? `${props.color}CC` : `${props.color}4D`};
  }
`;

export const ButtonFlexibleStyle = styled.button`
  transition: all 0.05s ease-in-out;
  display: inline-flex;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 8px;
  background-color: ${(props) => `${props.color}26`};
  color: ${(props) => `${props.color}B3`};

  letter-spacing: -1.2px;
  font-weight: 700;
  cursor: pointer;
  border: none;

  &:hover {
    transition: all 0.05s ease-in-out;
    background-color: ${(props) => `${props.color}33`};
  }
  &:active {
    transition: all 0.05s ease-in-out;
    background-color: ${(props) => `${props.color}66`};
  }
`;
