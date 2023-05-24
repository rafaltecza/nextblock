import React, { useState } from 'react';
import InputSelect, {InputSelectProps, InputType, OptionType} from "@components/molecules/InputSelect/InputSelect";

interface CombinedInputSelectProps {
    items: InputSelectProps[];
    rules: {
        onFocus: (activeInput: number) => void;
        onBlur: (activeInput: number) => void;
    }
}

const CombinedInputSelect: React.FC<CombinedInputSelectProps> = ({ items, rules }) => {
    const [activeInput, setActiveInput] = useState<number | null>(null);

    const handleFocus = (index: number) => {
        setActiveInput(index);
        rules.onFocus(index);
    };

    const handleBlur = (index: number) => {
        setActiveInput(null);
        rules.onBlur(index);
    };

    return (
        <>
            {items.map((item, index) => (
                <InputSelect
                    key={index}
                    options={item.options}
                    type={item.type}
                    suffix={item.suffix}
                    defaultOption={item.defaultOption}
                    onOptionSelect={item.onOptionSelect}
                    onInputChange={item.onInputChange}
                    onFocus={() => handleFocus(index)}
                    onBlur={() => handleBlur(index)}
                    isActive={activeInput === index}
                />
            ))}
        </>
    );
};

export default CombinedInputSelect;
