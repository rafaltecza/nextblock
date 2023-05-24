import styled, {css} from 'styled-components';
import {StyleType} from "@type/Enums";
import {StylingProps} from "@type/Intefaces";

export const StyledLabel = styled.label<StylingProps>`
  display: inline-block;
  margin-top: auto;
  font-size: calc(1 * ${props => props.size}px);
  text-align: ${props => props.textAlign};
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  white-space: ${props => props.whiteSpace};
  // margin-top: ${props => props.marginTop};
  line-height: ${props => props.lineHeight};
  ${props => props.styleType === StyleType.DEFAULT && css`

  `}

  ${props => props.styleType === StyleType.PRIMARY && css`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
  `}

  ${props => props.styleType === StyleType.SECONDARY && `
        // style for secondary label
    `}
`;
