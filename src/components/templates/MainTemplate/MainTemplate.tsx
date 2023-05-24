import React from 'react';
import { MainContainer } from './MainTemplate.styled';
import Navigation from "@components/organisms/Navigation/Navigation";
import Footer from "@components/organisms/Footer/Footer";

export interface MainProps {
    children: React.ReactNode;
    isHomePage?: boolean;
    isAuthorized?: boolean;
}

const MainTemplate = ({ children }: MainProps) => {
    return (
        <MainContainer>
            <Navigation/>
            {children}
        </MainContainer>
    );
};

export default MainTemplate;


