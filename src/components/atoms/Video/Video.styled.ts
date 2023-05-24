import styled from "styled-components";

export const VideoContainer = styled.div`
    line-height:0;
  width: 100%;
  height: 100%;
`

export const StyledVideo = styled.video.attrs({
    muted: true,
    autoPlay: true,
    loop: true,
    controls: false
})`
  border: solid 1px #333;
    `