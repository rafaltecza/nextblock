import styled, {keyframes} from "styled-components";

export const StyledParticleContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
  img {
    position: absolute;
    left: 0;
    top: 0;
  }
`



const sparkAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;


export const StyledParticleAnimation = styled.div `
`

