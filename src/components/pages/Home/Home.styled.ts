import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 3em 0;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
`;

export const RightContainer = styled.div`
  display: flex;
    flex-direction: column;
  gap: 2rem;
  position: relative;
`;

export const TournamentLogoContainer = styled.div`
  position: absolute;
    top: -116px;
    left: 50%;
    transform: translateX(-50%);
`;

export const PrizesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.4rem;
  //space-between;
  justify-content: space-between;
`;

export const PrizeContainer = styled.div<{marginTop: string}>`
  flex: 1;
  margin-top: ${({marginTop}) => marginTop};
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 0.5rem;
  width: 100%; 
  height: 100%;
  min-height: 200px;
  min-width: 170px;

`;

export const PrizeImageContainer = styled.div`
    margin-bottom: 5px;

`;


export const MainPrizeContainer = styled.div<{marginTop: string}>`
  flex: 1;
  margin-top: ${({marginTop}) => marginTop};
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 0.5rem;
  width: 100%; 
  height: 100%;
  min-height: 200px;
  min-width: 230px;

`;


export const PrizeBackground = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: -25%;
  z-index: -1;
`;

export const MainPrizeBackground = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  top: -10%;
  left: -30%;
  z-index: -1;
`;

export const DownloadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 0.4rem;
`;

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
`;

export const ProviderContainer = styled.div`
    margin-top: auto;
`;

export const VendorsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  gap: 2.7rem;
`;

export const LeaderBoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`;

export interface TitleContainerProps {
    justifyContent?: string;
}


export const TitleContainer = styled.div<TitleContainerProps>`
    display: flex;
    flex-direction: row;
    justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
    align-items: center;
    height: 60px; 
    width: 100%;
  background: linear-gradient(#21483f, #1f463d);
  padding: 2.5rem 1rem;
  gap: 1rem;
  

`;

