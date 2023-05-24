import React, { InputHTMLAttributes, ReactNode } from "react";
import {StyledInput, FakeValue, DefaultInput, StyledInputContainer, IconContainer} from "./Input.styled";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    styledHeightMultiplier?: number;
    styled?: boolean;
    styledWidthPercentage?: number;
    suffix?: string | boolean;
    icon?: ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ styledHeightMultiplier, suffix, styled = true, styledWidthPercentage, value, icon, ...props }, ref) => {
    const styledWidthValue = styledWidthPercentage !== undefined ? styledWidthPercentage : 100;
    const styledHeightMultiplierValue = styledHeightMultiplier !== undefined ? styledHeightMultiplier : 1;
    const shouldRenderSuffix = suffix !== undefined && suffix !== false;
    return (
        <>
            {suffix && <FakeValue widthValue={`${styledWidthValue + 5}%`} ><span>{value}</span> <span>{shouldRenderSuffix && suffix}</span></FakeValue>}

            {styled ?
                <StyledInputContainer size={styledHeightMultiplierValue}>
                    <IconContainer>
                        {icon}
                    </IconContainer>
                    <StyledInput size={styledHeightMultiplierValue} value={value} ref={ref} {...props} />
                </StyledInputContainer>

                :
                <DefaultInput widthValue={`${styledWidthValue}%`} value={value} ref={ref} {...props} />
            }
        </>
    );
});

Input.displayName = 'Input';

export default Input;
