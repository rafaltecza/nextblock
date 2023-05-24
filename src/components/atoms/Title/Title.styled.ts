import styled, {css, keyframes} from "styled-components";
import {TitleProps} from "@components/atoms/Title/Title";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0)
  }
  100% {
    transform: rotate(360deg)
  }
`;


const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledTitle = styled.h1<TitleProps>`
  position: relative;
  font-family: 'Oxanium', cursive;
  font-size: ${({ size }) => size || "1.5rem"};
  font-weight: ${({ weight }) => weight || "bold"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  white-space: ${({ whiteSpace }) => whiteSpace || "normal"};
  color: transparent;
  background-image: linear-gradient(to bottom, ${({ color1 }) => color1}, ${({ color2 }) => color2});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: ${({ textBorderSize, textBorderColor }) =>
    textBorderSize && textBorderColor ? `${textBorderSize} ${textBorderColor}` : "none"};
  text-stroke: ${({ textBorderSize, textBorderColor }) =>
    textBorderSize && textBorderColor ? `${textBorderSize} ${textBorderColor}` : "none"};
  z-index: 10;
  margin: 0;

  ${({ animate, animation, animationTime }) => animate && css`
    animation: ${animation !== undefined ? animation === 'rotateAnimation' ? rotateAnimation : pulseAnimation : pulseAnimation} ${animationTime} infinite ${animation !== null ? animation === 'rotateAnimation' ? 'linear' : '' : ''};
  `}

  & > span:first-child {
      font-family: 'Oxanium', cursive;
  font-size: ${({ size }) => size || "1.5rem"};
  font-weight: ${({ weight }) => weight || "bold"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  white-space: ${({ whiteSpace }) => whiteSpace || "normal"};
  color: transparent;
  background-image: linear-gradient(to bottom, ${({ color1 }) => color1}, ${({ color2 }) => color2});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: ${({ textBorderSize, textBorderColor }) =>
    textBorderSize && textBorderColor ? `${textBorderSize} ${textBorderColor}` : "none"};
  text-stroke: ${({ textBorderSize, textBorderColor }) =>
    textBorderSize && textBorderColor ? `${textBorderSize} ${textBorderColor}` : "none"};
  z-index: 10;
  position: relative;
  display: block;
  }
  
  & > span:last-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-family: 'Oxanium', cursive;
    font-size: ${({ size }) => size || "1.5rem"};
    font-weight: ${({ weight }) => weight || "bold"};
    text-align: ${({ textAlign }) => textAlign || "center"};
    white-space: ${({ whiteSpace }) => whiteSpace || "normal"};
    color: transparent;
    pointer-events: none;
    z-index: 0;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 0, 0, 0.3);
  {...props}
  }
`;
