import {StyledTitle} from "@components/atoms/Title/Title.styled";
import React from "react";

export interface TitleProps {
    color1: string;
    color2: string;
    size?: string;
    weight?: string;
    textBorderColor?: string;
    textBorderSize?: string;
    whiteSpace?: string;
    textAlign?: string;
    animate?: boolean;
    animation?: 'rotateAnimation' | 'pulseAnimation' | 'none';
    animationTime?: string;
}

const Title = ({ children, animationTime = '1.3s', animate, animation = 'pulseAnimation', ...props }: TitleProps) => {
    return (
        <StyledTitle animate={animate} animationTime={animationTime} animation={animation} {...props}>{children}</StyledTitle>
    );
};

export default Title;