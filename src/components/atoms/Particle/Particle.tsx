import {StyledParticleAnimation, StyledParticleContainer} from "@components/atoms/Particle/Particle.styled";
import CustomImage from "@components/atoms/Image/Image";

const Particle = ({ color = 'blue', size, width = 300, height = 300, ...props }) => {
    return (
        <StyledParticleContainer color={color} size={size} {...props}>
            <StyledParticleAnimation>
                <CustomImage src={`/images/icons/decoration/Prize_Glow_${color}.png`} alt={''} width={width} height={height}/>
            </StyledParticleAnimation>
            <CustomImage src={`/images/icons/decoration/Prize_Glow_${color}_Blur.png`} alt={''} width={width} height={height}/>
            <CustomImage src={`/images/icons/decoration/Prize_Glow_${color}_Shinyyy.png`} alt={''} width={width} height={height}/>
        </StyledParticleContainer>
    );
}

export default Particle;