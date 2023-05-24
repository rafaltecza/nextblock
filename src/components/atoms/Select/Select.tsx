import React, { useState, useEffect, useRef } from 'react';
import { SelectContainer, SelectButton, SelectPopup, SelectItem, CurrencyIcon, SearchInput } from './Select.styled';
import Input from "@components/atoms/Input/Input";
import Image from "@components/atoms/Image/Image";

interface OptionType {
    id: string;
    label: string;
    signet: string;
    iconUrl: string;
}

interface SelectComponentProps {
    options: OptionType[];
    defaultOption: OptionType;
    onOptionSelect: (option: OptionType) => void;
}

const SelectComponent: React.FC<SelectComponentProps> = ({ options, defaultOption, onOptionSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultOption);
    const [searchQuery, setSearchQuery] = useState('');
    const selectRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isOpen]);
    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleOptionSelect = (option: OptionType) => {
        setSelectedOption(option);
        onOptionSelect(option);
        setIsOpen(false);
    };

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <SelectContainer ref={selectRef} onClick={handleClick}>
            <SelectButton onClick={() => setIsOpen(!isOpen)}>
                <CurrencyIcon src={selectedOption.iconUrl} alt={""} />
                {selectedOption.label}
                <span className={"arrow"}/>
            </SelectButton>
            {isOpen && (
                <SelectPopup>
                    <Input
                        ref={searchInputRef}
                        type="text"
                        icon={<Image src={"/images/icons/common/loupe.svg"} alt={""} width={18} height={18}/>}
                        styledHeightMultiplier={0.8}
                        placeholder="Search"
                        value={searchQuery}
                        onClick={e => e.stopPropagation()}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                    {filteredOptions.map(option => (
                        <SelectItem
                            key={option.id}
                            onClick={() => handleOptionSelect(option)}
                        >
                            <CurrencyIcon src={option.iconUrl} alt={""} />
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectPopup>
            )}
        </SelectContainer>
    );
};

export default SelectComponent;
