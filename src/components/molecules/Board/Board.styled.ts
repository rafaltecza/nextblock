import styled, {keyframes} from "styled-components";
import {BoardProps} from "@components/molecules/Board/Board";

export const BoardContainer = styled.div<{index: number}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  font-size: 1.5rem;
  background-color: ${({index}) => (index % 2 === 0 ? "#29594f" : "#2f6256")};

  &.primary {
    border: 3px solid #4fa051;
    background-color: #326653;
  }

`;

export const BoardTitle = styled.h2`
  display: block;
  width: 100%;
  color: #21483f;
  background: #62bd89;
  text-align: center;
  font-size: 1.2rem;
    line-height: 40px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
`

export const BoardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    align-items: center;
    width: 100%;
  
    .board-place {
      
    }

      .board-data {
    
      }
`;

export const BoardDataWrapper = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    align-items: center;
    width: 100%;
`;

export const BoardPlace = styled.div<{ place: number }>`
  display: block;
  width: 60px;
  line-height: 50px;
  font-weight: bold;
  font-size: 1.6rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.1);
  color: #4fa051;
  ${({ place }) =>
    (place === 0 || place === 1 || place === 2 || place === 3) &&
    `color: #28594d; background-image: url("/images/icons/board/Frame_leaderboards_DIY_${place}.png");`}
`;


const showRest = keyframes`
  0% {
    left: 0;
  }
  25% {
    left: -10%;
  }
  50% {
    left: 0;
  }
`;



export const BoardData = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  color: #7ecb58;
  min-width: 180px;
  position: relative;
  font-weight: bold;
  white-space: nowrap;
  
  &.expand {
    animation: ${({}) => showRest} 20s infinite;
  }

  @media (min-width: 1920px) {
    min-width: 250px;
  }
`;


export const BoardPoints = styled.div`
  display: block;
  width: 30%;
  height: 100%;
  color: #59ab52;
  font-weight: bold;
  margin-right: 1.5rem;
  text-align: right;
`;

export const BoardEntityContainer = styled.div`
  width: 100%;
  position: relative;

  &.primary {
      &::before {
        content: "";
        background-image: url("/images/icons/decoration/Leaderboard_Silver.png");
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 48%;
        position: absolute;
        top: 0;
        opacity: 0.1;
        left: 0;
      }
    }
`;