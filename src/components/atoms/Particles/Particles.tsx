import CustomImage from "@components/atoms/Image/Image";
import {StyledParticlesContainer} from "@components/atoms/Particles/Particles.styled";

export interface ParticlesProps {
    color?: string;
    rotate?: string;
    size?: string;
    width?: number;
    height?: number;
    left?: string;
    top?: string;
    right?: string;
    bottom?: string;
    animationTime?: string;
}

const Particles = ({ color = 'Blue', animationTime = '10s', rotate = "0", size = "10", width = 300, height = 300, ...props }) => {
    return (
        <StyledParticlesContainer rotate={rotate} color={color} {...props}>
            <CustomImage animationTime={animationTime} animation={"rotateAnimation"} animate={true} src={`/images/icons/decoration/Prize_Glow_${color}.png`} alt={''} width={width} height={height}/>
        </StyledParticlesContainer>
    );
}

export default Particles;