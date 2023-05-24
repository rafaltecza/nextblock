import React, {useEffect, useState} from "react";
import { ErrorMessage, Field, FieldProps, useFormikContext } from "formik";
import Button from "@components/atoms/Button/Button";
import { AnimationEvent, AnimationType, IconSide, StyleType } from "@type/Enums";
import { CardCategory } from "@components/atoms/Card/Card.styled";
import CombinedInputSelect from "@components/molecules/CombinedInputSelect/CombinedInputSelect";
import InputSelect, { InputType } from "@components/molecules/InputSelect/InputSelect";
import * as StyleParent from "@components/organisms/Form/Form.styled";
import * as S from "@components/organisms/Form/FormExchange/FormExchange.styled";
import Image from "@components/atoms/Image/Image";
import {isValid} from "zod";

const FormExchange = () => {
    const [valid, setValid] = useState(false);
    const [loading, setLoading] = useState(true);
    const { setFieldValue, isValid, validationSchema, values } = useFormikContext();

    const options = [
        { id: "1", label: "Tethra", signet: "TET", iconUrl: "/images/icons/cryptocurrencies/usdt.svg" },
        { id: "2", label: "Ethereum", signet: "USDT", iconUrl: "/images/icons/cryptocurrencies/eth.svg" },
    ];

    const currencies = [
        { id: "1", label: "USD", signet: "USD", iconUrl: "/images/icons/currencies/usd.svg" },
        { id: "2", label: "GBP", signet: "GBP", iconUrl: "/images/icons/currencies/gbp.svg" },
        { id: "3", label: "EUR", signet: "EUR", iconUrl: "/images/icons/currencies/eur.svg" },
        { id: "4", label: "YEN", signet: "YEN", iconUrl: "/images/icons/currencies/yen.svg" },
    ];

    const blockchains = [
        { id: "1", label: "Polygon", signet: "POLYGON", iconUrl: "/images/icons/blockchains/polygon.svg" },
    ];

    const handleOptionSelect = (option: { id: string; label: string; iconUrl: string }) => {
        console.log("Selected option:", option);
    };

    const handleInputChange = (fieldName: string, value: string, values: any) => {
        setFieldValue(fieldName, value);
        validate({ ...values, [fieldName]: value });
    };

    useEffect(() => {
        setFieldValue('isValid', false);
        setLoading(false);
    }, [setFieldValue])

    const validate = (values: any) => {
        validationSchema.validate(values)
            .then(() => {
                setValid(true);
            })
            .catch((error: any) => {
                console.log(error);
                setValid(false);
            });
    }

    return (
        <div>
            <StyleParent.Section>
                <CardCategory>Buy Crypto</CardCategory>
                <S.ExchangeContainer>
                    <Field name="cryptoAmount">
                        {({ field }: FieldProps<string>) => (
                            <CombinedInputSelect
                                items={[
                                    {
                                        options: options,
                                        defaultOption: options[0],
                                        type: InputType.Digit,
                                        suffix: true,
                                        onOptionSelect: handleOptionSelect,
                                        onInputChange: (value: string) => {
                                            setFieldValue("cryptoAmount", value); // Ustaw wartość pola cryptoAmount w Formik
                                            handleInputChange('cryptoAmount', value, values);
                                        },
                                    },
                                    {
                                        options: currencies,
                                        defaultOption: currencies[0],
                                        type: InputType.Digit,
                                        suffix: true,
                                        onOptionSelect: handleOptionSelect,
                                        onInputChange: (value: string) => {
                                            setFieldValue("currencyAmount", value); // Ustaw wartość pola currencyAmount w Formik
                                            handleInputChange('currencyAmount', value, values);
                                        },
                                    },
                                ]}
                                rules={{
                                    onFocus: (activeInput: number) => console.log("Focus on input:", activeInput),
                                    onBlur: (activeInput: number) => console.log("Blur on input:", activeInput),
                                }}
                            />
                        )}
                    </Field>
                </S.ExchangeContainer>
            </StyleParent.Section>

            <StyleParent.Section>
                <CardCategory>Wallet Address</CardCategory>
                <Field name="walletAddress">
                    {({ field }: FieldProps<string>) => (
                        <InputSelect
                            options={blockchains}
                            type={InputType.Digit}
                            placeholder="Enter wallet address"
                            defaultOption={blockchains[0]}
                            onOptionSelect={handleOptionSelect}
                            onInputChange={(value: string) => {
                                setFieldValue("walletAddress", value); // Ustaw wartość pola walletAddress w Formik
                                handleInputChange('walletAddress', value, values);
                            }}
                        />
                    )}
                </Field>
            </StyleParent.Section>

            <Button
                styleType={StyleType.PRIMARY}
                disabled={loading || !valid}
                type="submit"
                icon={{
                    side: IconSide.RIGHT,
                    animation: {
                        type: AnimationType.BOUNCE,
                        event: AnimationEvent.HOVER,
                        repeat: 1,
                    },
                    value: (
                        <Image
                            width={19}
                            height={19}
                            useContainer={false}
                            src={"/images/icons/common/arrow.svg"}
                            alt=""
                        />
                    ),
                }}
            >
                Continue
            </Button>
        </div>
    );
};

export default FormExchange;
