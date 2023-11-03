import styled from "styled-components";
import { Feature, Color } from "./Button";

export const ButtonStyle = styled.button`
  transition: all 0.05s ease-in-out;
  width: 300px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16.5px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.feature === Feature.NONE
      ? `rgba(${props.color}, 0.5)`
      : `rgba(${props.color}, 0)`};
  border-width: ${(props) => (props.feature === Feature.LINE ? "1px" : "0px")};
  border-style: solid;
  border-color: ${(props) => `rgb(${props.color})`};
  color: ${(props) =>
    props.feature === Feature.LINE && props.color !== Color.WHITE
      ? `rgb(${props.color})`
      : "#ffffff"};
  letter-spacing: -1.68px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    transition: all 0.05s ease-in-out;
    background-color: ${(props) =>
      props.feature === Feature.NONE
        ? `rgba(${props.color}, 0.65)`
        : `rgba(${props.color}, 0.15)`};
  }
  &:active {
    transition: all 0.05s ease-in-out;
    background-color: ${(props) =>
      props.feature === Feature.NONE
        ? `rgba(${props.color}, 0.80)`
        : `rgba(${props.color}, 0.30)`};
  }
`;

export const ButtonFlexibleStyle = styled.button`
  transition: all 0.05s ease-in-out;
  display: inline-flex;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 8px;
  background-color: ${(props) => `rgba(${props.color}, 0.1)`};
  color: ${(props) => `rgba(${props.color}, 0.7)`};
  letter-spacing: -1.2px;
  font-weight: 700;
  cursor: pointer;
  border: none;

  &:hover {
    transition: all 0.05s ease-in-out;
    background-color: ${(props) => `rgba(${props.color}, 0.2)`};
  }
  &:active {
    transition: all 0.05s ease-in-out;
    background-color: ${(props) => `rgba(${props.color}, 0.4)`};
  }
`;
