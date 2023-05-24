import styled from "styled-components";

export const StyledPoints = styled.div`
    display: flex;
    margin-top: auto;
    background-color: #234940;
    color: #7ecb58;
    font-size: 1.2rem;
    padding-left: 0.4rem;
    padding-right: 0.8rem;
    font-weight: 600;
    border-left: 1px solid #282828;
    border-bottom: 1px solid #282828;
    //box-shadow: 0 1px 1px 0 #282828;
`;
export const StyledPointsTitle = styled.h4`
    font-size: 0.9rem;
    font-weight: 600;
    color: #7ecb58;
    padding: 0 0 0 0.4rem;
    border-left: 1px solid transparent;
    margin: 0;
`;

export const StyledPointsContainer = styled.div`
    position: absolute;
    top: -16%;
    min-height: 43px;
    left: 5%;
    display: flex;
    flex-direction: column;
`;