import React from 'react';
import {
    NavigationContainer,
    NavItem,
    ConnectButton,
    NavigationLeftSide,
    NavigationLogoSuffix, NavigationLogoContainer
} from './Navigation.styled';
import CustomImage from "@components/atoms/Image/Image";
import {useRouter} from "next/router";
import {Routes} from "@consts/Routes";

const Navigation: React.FC = () => {
    const router = useRouter();
    return (
        <NavigationContainer>
            <NavigationLogoContainer>
                <CustomImage width={360}
                             height={80}
                             src={'/images/logo/logo.png'}
                             onClick={() => router.push(Routes.HOME)}
                             alt={'logo'}
                             clickable={true}/>
                <NavigationLogoSuffix>
                    <CustomImage width={150}
                                 height={82}
                                 src={'/images/logo/logo_suffix.png'}
                                 onClick={() => router.push(Routes.HOME)}
                                 alt={'logo'}
                                 clickable={false}
                                 animate={true}
                                 useContainer={true}/>
                </NavigationLogoSuffix>
            </NavigationLogoContainer>

        </NavigationContainer>
    );
};

export default Navigation;
