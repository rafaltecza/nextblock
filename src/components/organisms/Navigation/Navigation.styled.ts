import styled, {css} from 'styled-components';
import {theme} from "@utils/theme/theme";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: baseline;
  padding: 3em 0 0 0;
  gap: 2rem;
  width: 100%;
`;

export const NavigationLogoContainer = styled.div`
    position: relative;
`;

export const NavigationLogoSuffix = styled.div`
  position: absolute;
    bottom: -45%;
    right: -35%;
  z-index: 10;
`;

export const NavigationLeftSide = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 3rem;
`;

export const NavItem = styled.div`
  /* Style your nav item here */
`;

export const ConnectButton = styled.button(
    ({ theme }) => css`
        padding: 10px 23px;
          gap: 10px;
        
          width: 217px;
          height: 43px;
        
          border: 3px solid rgba(255, 255, 255, 0.1);
          filter: drop-shadow(0px 1px 2px #000);
          border-radius: 40px;
      background: transparent;
`)

