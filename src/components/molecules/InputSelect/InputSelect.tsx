import React, {useRef, useState} from 'react';
import { InputSelectContainer } from './InputSelect.styled';
import Select from "@components/atoms/Select/Select";
import Input from "@components/atoms/Input/Input";

export interface OptionType {
    id: string;
    label: string;
    signet: string;
    iconUrl: string;
}

export enum InputType {
    Digit = 'digit',
    Number = 'number',
    Alpha = 'alpha',
    Alphanumeric = 'alphanumeric',
    Email = 'email',
    ZipCode = 'zipcode',
    Date = 'date',
    Year = 'year',
    Month = 'month',
    Day = 'day',
    Money = 'money',
}

const inputTypeRegexMap = {
    [InputType.Digit]: /^\d*([.,]\d*)?$/,
    [InputType.Number]: /^\d+$/,
    [InputType.Alpha]: /^[a-zA-Z]+$/,
    [InputType.Alphanumeric]: /^[a-zA-Z0-9]+$/,
    [InputType.Email]: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    [InputType.ZipCode]: /^\d{5}$/,
    [InputType.Date]: /^\d{4}-\d{2}-\d{2}$/,
    [InputType.Year]: /^\d{4}$/,
    [InputType.Month]: /^(0[1-9]|1[0-2])$/,
    [InputType.Day]: /^(0[1-9]|[12][0-9]|3[01])$/,
    [InputType.Money]: /^\d*([.,]\d{0,2})?$/,
};
export interface InputSelectProps {
    options: OptionType[];
    type: InputType;
    defaultOption: OptionType;
    onOptionSelect: (option: OptionType) => void;
    onInputChange: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    isActive?: boolean;
    suffix?: boolean;
    placeholder?: string;
}

const InputSelect: React.FC<InputSelectProps> = ({ type, suffix = false, placeholder, options, defaultOption, onOptionSelect, onInputChange, onFocus, onBlur, isActive }) => {
    const [inputValue, setInputValue] = useState('');
    const [selectedSignet, setSelectedSignet] = useState(defaultOption.signet);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        const regex = inputTypeRegexMap[type];
        if (regex && !regex.test(newValue)) {
            return;
        }
        setInputValue(newValue);
        onInputChange(newValue);
    };

    const handleOptionSelect = (option: OptionType) => {
        setSelectedSignet(option.signet);
        onOptionSelect(option);
    };

    const handleContainerClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <InputSelectContainer onClick={handleContainerClick} active={isActive}>
            <Input
                ref={inputRef}
                type="text"
                placeholder={placeholder}
                styled={false}
                value={inputValue}
                onChange={handleInputChange}
                suffix={suffix ? selectedSignet : false}
                styledWidthPercentage={50}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <Select
                options={options}
                defaultOption={defaultOption}
                onOptionSelect={handleOptionSelect}
            />
        </InputSelectContainer>
    );
};

export default InputSelect;
