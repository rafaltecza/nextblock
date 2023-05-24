import {AnimationEvent, AnimationType, IconSide, StyleType} from "@type/Enums";
import React from "react";

export interface StylingProps {
    size?: number;
    styleType?: StyleType;
    textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
    color?: string;
    fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | 'number' | 'initial' | 'inherit';
    width?: number;
    children: React.ReactNode;
}

export interface ButtonProps {
    children: React.ReactNode;
    icon?: {
        side: IconSide,
        value: React.ReactNode,
        animation?: {
            type: AnimationType,
            event: AnimationEvent,
            repeat?: 'infinite' | number,
        },
    }
}


