import styled from "styled-components";

export const StyledInputContainer = styled.div<{size: number}>`
  display: inline-flex;
  align-items: center;
  width: 100%;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding-left: 15px;
  padding-right: 11px;
  background-color: transparent;
  height: calc(57 * ${props => props.size}px);
  color: transparent;
  z-index: 2;
  font-weight: 400;
`;

export const StyledInput = styled.input<{size: number}>`
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-radius: 30px;
  background-color: transparent;
  color: #ffffff;
  caret-color: white;
  z-index: 2;
  font-weight: 400;
  font-size: calc(22 * ${props => props.size}px);
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: transparent;
  }
`;

export const DefaultInput = styled.input<{widthValue: string}>`
  width: ${props => props.widthValue};
  background-color: transparent;
  color: #ffffff;
  z-index: 2;
  font-weight: 400;
  font-size: 22px;
  border: 0 solid transparent;
  outline: none; 
  transition: border-color 0.3s;

  &:focus {
    border-color: transparent;
  }

`;

export const FakeValue = styled.span<{widthValue: string}>`
  width: ${props => props.widthValue};
  position: absolute;
  visibility: visible;
  left: 18px;
  top: 50%;
  font-weight: 400;
  font-size: 22px;
  z-index: 1;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  transform: translateY(-50%);
  
  :first-child {
    max-width: 87%;
    white-space: nowrap;
    overflow: hidden;
    color: transparent;
  }
  
  span {
    display: inline-flex;
  }
`;

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
`;