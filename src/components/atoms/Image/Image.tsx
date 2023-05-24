import React from "react";
import Image from "next/image";
import * as S from "./Image.styled";

export interface ImageProps {
    className?: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    onClick?: () => void;
    clickable?: boolean;
    useContainer?: boolean;
    animate?: boolean;
    animation?: 'rotateAnimation' | 'pulseAnimation' | 'none';
    animationTime?: string;
    style?: React.CSSProperties;
}

const CustomImage = ({ useContainer = true, animation, animationTime = '1.3s', animate = false, style, ...props }: ImageProps) => {
    const ImageContent = <Image quality={100} onClick={props.onClick} {...props}/>;

    if (useContainer) {
        return (
            <S.ImageContainer clickable={props.clickable} animationTime={animationTime} animation={animation} animate={animate}>
                {ImageContent}
            </S.ImageContainer>
        );
    } else {
        return ImageContent;
    }
};

export default CustomImage;