import React from "react";
import * as S from "./Card.styled";

export interface CardProps {
    children: React.ReactNode;
    body?: boolean;
    type?: "primary" | "secondary";
    style?: React.CSSProperties;
}

const Card = ({ children, type, ...props }: CardProps) => {
    return (
        <S.CardContainer>
            <S.Card className={`${type ? type : "default"} shadow-xl`} {...props}>
                <S.CardBody body={props.body !== undefined ? props.body : true} className={type ? type : "default"}>
                    {children}
                </S.CardBody>
            </S.Card>
        </S.CardContainer>
    );
};

export default Card;