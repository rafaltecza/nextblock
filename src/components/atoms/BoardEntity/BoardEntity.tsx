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
            <BoardPlace place={props.place} index={props.index}>{props.place === 0 ? 1 : props.place}</BoardPlace>
            <BoardWrapper>
                <BoardData index={props.index}>{props.entity.name}</BoardData>
                <BoardPoints index={props.index}>{props.entity.points}</BoardPoints>
            </BoardWrapper>
        </BoardContainer>
    )
}

export default BoardEntity;