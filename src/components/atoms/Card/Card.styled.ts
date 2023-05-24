import styled, {css} from "styled-components";

export const CardContainer = styled.div(
    ({ theme }) => css`
        width: 100%;
    `
)

export const Card = styled.div(
    ({ theme }) => css`
      display: flex;
      position: relative;
      overflow: hidden;

      &.default {
        background: linear-gradient(#21483f, #215045);
      }

      &.secondary {
        background: linear-gradient(#21483f, #1f463d);


        &::before {
          content: "";
          background: linear-gradient(45deg, #2f5349, #3f594e);
          position: absolute;
          top: 0;
          right: 28%;
          display: block;
          z-index: 0;
          height: 100%;
          width: 80%;
          clip-path: polygon(0% 0%, /* top left */ 0% 0%, /* top left */ 100% 0%, /* top right */ 95% 100%, /* top right */ 100% 100%, /* bottom right */ 100% 100%, /* bottom right */ 0% 100%, /* bottom left */ 0 100% /* bottom left */);
        }
      }
    `)


export const CardBody = styled.div<{body: boolean}>(
    ({ theme, body }) => css`
      padding: ${body === undefined || body ? '40px' : '0'};
      width: 100%;
      z-index: 1;

        & > label:not(:first-child) {
            margin-top: 1.2rem;
        }
    `
)


export const CardCategory = styled.label(
    ({ theme }) => css`
      display: flex;
      text-transform: uppercase;
      margin-bottom: 1.2rem;
      font-size: 12px;
      font-weight: 700;
    `
)

