import styled, {css} from "styled-components";
import {LabelProps} from "@components/atoms/Label/Label";
import {StyleType} from "@type/Enums";
import {ButtonProps, StylingProps} from "@type/Intefaces";

export const StyledButton = styled.button<StylingProps & ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ccc;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  width: ${props => props.width ? `${props.width}%` : 'auto'};
  gap: 1rem;

  ${props => props.disabled && css`
    opacity: 0.7;
    pointer-events: none;
  `}

  &.bounce-hover:hover span {
    animation: ${props => !props.disabled ? `bounce 1s ${props.icon?.animation?.repeat ? props.icon.animation.repeat : 'infinite'}` : 'none'};
  }

  &.rotate-hover:hover span {
    animation: ${props => !props.disabled ? `rotate 1s ${props.icon?.animation?.repeat ? props.icon.animation.repeat : 'infinite'}` : 'none'};
  }

  &.fade-hover:hover span {
    animation: ${props => !props.disabled ? `fade 1s ${props.icon?.animation?.repeat ? props.icon.animation.repeat : 'infinite'}` : 'none'};
  }

  span {
      ${props => props.styleType === StyleType.PRIMARY && css`
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        background: white;
        color: black;
      `}
}

  ${props => props.styleType === StyleType.DEFAULT && css`
    font-size: ${props.size};
    text-align: ${props.textAlign};
    color: ${props.color};
    font-weight: ${props.fontWeight};
`}

  ${props => props.styleType === StyleType.PRIMARY && css`
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      background: white;
      color: black;
      border-radius: 30px;
  `}

  ${props => props.styleType === StyleType.SECONDARY && `
        // style for secondary button
    `}
`;
