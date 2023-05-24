import {StyledPoints, StyledPointsContainer, StyledPointsTitle} from "@components/atoms/Points/Points.styled";

export interface PointsProps {
    useTitle?: boolean;
    points: string;
}

const Points = ({ points, useTitle = true }: PointsProps) => {
    return (
            <StyledPointsContainer>
                { useTitle && <StyledPointsTitle>score</StyledPointsTitle> }
                <StyledPoints>{points}</StyledPoints>
            </StyledPointsContainer>

    );
}

export default Points;