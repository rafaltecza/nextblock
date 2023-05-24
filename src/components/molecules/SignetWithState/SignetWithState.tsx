import React, { useState, useEffect } from 'react';
import Signet from "@components/atoms/Signet/Signet";

interface OptionType {
    id: string;
    label: string;
    signet: string;
    iconUrl: string;
}

interface SignetWithStateProps {
    defaultOption: OptionType;
}

const SignetWithState: React.FC<SignetWithStateProps> = ({ defaultOption }) => {
    const [selectedSignet, setSelectedSignet] = useState(defaultOption.signet);

    useEffect(() => {
        setSelectedSignet(defaultOption.signet);
    }, [defaultOption]);

    return <Signet text={selectedSignet} />;
};

export default SignetWithState;
