import styled, {css} from "styled-components";

export const DocumentContainer = styled.div(
    ({ theme }) => css`
        position: relative;
    `
)

export const DocumentTitle = styled.h1(
    ({ theme }) => css`
          font-size: 22px;
            font-weight: 400;
          text-transform: uppercase;
          margin: 3rem 0 3rem 0;
      
          &.center {
            text-align: center;
          }

        @include media-breakpoint-up(md) {
          margin: 60px 0;
        }
    `
)

export const DocumentSubtitle = styled.h2(
    ({ theme }) => css`
      font-size: 18px;
      margin: 15px 0;
      font-weight: 700;
      
      &.center {
        text-align: center;
      }

    @include media-breakpoint-up(md) {
      margin: 30px 0;
    }
    `
)

export const DocumentParagraph = styled.p(
    ({ theme }) => css`
      margin-bottom: 20px;
    `
)

export const DocumentOrderedList = styled.ol(
    ({ theme }) => css`
      margin-top: 16px;
    .list {
        list-style: normal;
        padding-left: 16px;
        &__item {
          padding-bottom: 20px;
        }
        &__inner {
          list-style-type: lower-latin;
          padding: 20px 0 0 20px;
        }
  }
    `
)
