import React from "react";
import * as S from "./DocumentTemplate.styled";
import Navigation from "@components/organisms/Navigation/Navigation";
import Footer from "@components/organisms/Footer/Footer";
export interface DocumentProps {
    children: React.ReactNode;
}

const DocumentTemplate = ({ children }: DocumentProps) => {
    return (
        <>
            <Navigation></Navigation>
            <S.DocumentContainer>
                {children}
            </S.DocumentContainer>
        </>

    );
};

export default DocumentTemplate;