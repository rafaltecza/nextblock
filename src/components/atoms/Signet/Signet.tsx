// Signet.tsx
import React from 'react';
import { SignetContainer } from './Signet.styled';

interface SignetProps {
    text: string;
}

const Signet: React.FC<SignetProps> = ({ text }) => {
    return (
        <SignetContainer>
            {text}
        </SignetContainer>
    );
};

export default Signet;
