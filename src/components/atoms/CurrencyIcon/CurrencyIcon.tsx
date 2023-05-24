import React from "react";

export interface CurrencyIconProps {
    children: React.ReactNode;
}

const CurrencyIcon = ({ children, ...props }: CurrencyIconProps) => {
    return (
        <div {...props}>{children}</div>
    );
};

export default CurrencyIcon;