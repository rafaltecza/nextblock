import BoardEntity from "@components/atoms/BoardEntity/BoardEntity";
import {map} from "zod";
import {BoardEntityContainer, BoardTitle} from "@components/molecules/Board/Board.styled";

export interface BoardProps {
    type?: "primary" | "secondary";
    items: {name: string, points: number}[];

}
const Board = ({items, type = 'primary'}: BoardProps) => {
    const limitedItems = items.slice(0, 14);

    return (
        <>
            <BoardTitle>Yesterday's High Score</BoardTitle>
            <BoardEntity type={'primary'} index={0} entity={{name: 'Agrael', points: '1596'}} place={0}/>
            <BoardEntityContainer className={type}>
                {limitedItems.map((item, index) => {
                    return <BoardEntity index={index} entity={item} place={index + 1}/>
                })}
            </BoardEntityContainer>
        </>


    )
}

export default Board