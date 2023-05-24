import styled from "styled-components";
import {ParticlesProps} from "@components/atoms/Particles/Particles";

export const StyledParticlesContainer = styled.div<ParticlesProps>`
    position: absolute;
    left: ${props => props.left};
    top: ${props => props.top};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    transform: rotate(${props => props.rotate}deg);

    z-index: -1;
  
`