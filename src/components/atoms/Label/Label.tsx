import React from 'react';
import { StyledLabel } from './Label.styled';
import {StyleType} from "@type/Enums";

export interface LabelProps {
    size?: number;
    styleType?: StyleType;
    textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
    color?: string;
    fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | 'number' | 'initial' | 'inherit';
    whiteSpace?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';
    lineHeight?: number;
    marginTop?: string;
    children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ styleType = StyleType.DEFAULT, marginTop = '0', ...props }) => {
    return <StyledLabel styleType={styleType} {...props} />;
};

export default Label;
