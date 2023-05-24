import styled, {css, keyframes} from "styled-components";

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


export const ImageContainer = styled.div<{ clickable?: boolean, animate?: boolean, animation?: string, animationTime?: string }>`
  align-items: center;
  display: flex;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};

  ${({ animate, animation, animationTime }) => animate && css`
    animation: ${animation !== undefined ? animation === 'rotateAnimation' ? rotateAnimation : animation : pulseAnimation} ${animationTime} infinite ${animation !== null ? animation === 'rotateAnimation' ? 'linear' : '' : ''};
  `}
`;

