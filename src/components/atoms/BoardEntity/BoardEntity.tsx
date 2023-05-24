import {
    BoardContainer,
    BoardData, BoardDataWrapper,
    BoardPlace,
    BoardPoints,
    BoardWrapper
} from "@components/molecules/Board/Board.styled";

export interface BoardEntityProps {
    index: number;
    entity: any;
    place: number;
    type?: "primary" | "secondary";
}

const BoardEntity = ({ type = 'secondary',...props }: BoardEntityProps) => {
    return (
        <BoardContainer className={type} index={props.index}>
            <BoardPlace place={props.place}>{props.place === 0 ? 1 : props.place}</BoardPlace>
            <BoardWrapper>
                <BoardDataWrapper>
                    <BoardData className={props.entity.name.length > 16 ? 'expand' : ''}>{props.entity.name}</BoardData>
                </BoardDataWrapper>
                <BoardPoints>{props.entity.points}</BoardPoints>
            </BoardWrapper>
        </BoardContainer>
    )
}

export default BoardEntity;