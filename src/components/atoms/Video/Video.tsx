import { useRef, useEffect } from "react";
import {StyledVideo, VideoContainer} from "@components/atoms/Video/Video.styled";

interface VideoProps {
    height?: number;
    width?: number;
    src: string;
}

const Video = ({src, height = 720, width = 1280, ...props}: VideoProps) => {
    const videoRef1 = useRef<HTMLVideoElement | null>(null);
    const videoRef2 = useRef<HTMLVideoElement | null>(null);
    const loopPoint = 48;

    useEffect(() => {
        const video1 = videoRef1.current;
        const video2 = videoRef2.current;

        function checkLoop() {
            if (video1?.currentTime && video1.currentTime >= loopPoint) {
                video1.currentTime = 0;
                video2?.play();
            }
            if (video2?.currentTime && video2.currentTime >= loopPoint) {
                video2.currentTime = 0;
                video1?.play();
            }
        }

        if (video1) {
            video1.addEventListener('timeupdate', checkLoop);
        }
        if (video2) {
            video2.addEventListener('timeupdate', checkLoop);
        }

        // Cleanup function
        return () => {
            if (video1) {
                video1.removeEventListener('timeupdate', checkLoop);
            }
            if (video2) {
                video2.removeEventListener('timeupdate', checkLoop);
            }
        }
    }, []);

    return (
        <VideoContainer>
            <StyledVideo ref={videoRef1} autoPlay width={width} height={height} src={src}/>
            <StyledVideo ref={videoRef2} style={{display: 'none'}} width={width} height={height} src={src}/>
        </VideoContainer>
    );
};

export default Video;
