import {
    BoardContainer,
    BoardData,
    BoardPlace,
    BoardPoints,
    BoardWrapper
} from "@components/molecules/Board/Board.styled";

export interface BoardEntityProps {
    index: number;
    entity: any;
    place: number;
    points: number;
    type?: "primary" | "secondary";
}

const BoardEntity = ({ type = 'secondary',...props }: BoardEntityProps) => {
    return (
        <BoardContainer className={type} index={props.index}>
            <BoardPlace place={props.place}>{props.place === 0 ? 1 : props.place}</BoardPlace>
            <BoardWrapper>
                <BoardData>{props.entity.name}</BoardData>
                <BoardPoints>{props.entity.points}</BoardPoints>
            </BoardWrapper>
        </BoardContainer>
    )
}

export default BoardEntity;