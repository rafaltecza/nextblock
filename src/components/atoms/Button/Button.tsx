import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "@components/atoms/Button/Button.styled";
import { ButtonProps, StylingProps } from "@type/Intefaces";
import {AnimationEvent, AnimationType, IconSide} from "@type/Enums";

type ButtonDefaultProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonDefaultProps & ButtonProps & StylingProps> = ({
                                                                               icon,
                                                                               width = 100,
                                                                               ...props
                                                                           }) => {
    const animationClass = icon?.animation ? `${icon.animation.type.toLowerCase()}-${icon.animation.event.toLowerCase()}` : '';
    return (
        <StyledButton icon={icon} className={animationClass} width={width} {...props}>
            {icon?.side === IconSide.LEFT && <span>{icon.value} </span>}
            {props.children}
            {icon?.side === IconSide.RIGHT && <span> {icon.value}</span>}
        </StyledButton>
    );
};

export default Button;