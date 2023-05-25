import MainTemplate from "@components/templates/MainTemplate/MainTemplate";
import Card from "@components/atoms/Card/Card";
import {CardCategory} from "@components/atoms/Card/Card.styled";
import InputSelect, {InputType} from "@components/molecules/InputSelect/InputSelect";
import CombinedInputSelect from "@components/molecules/CombinedInputSelect/CombinedInputSelect";
import Label from "@components/atoms/Label/Label";
import {AnimationEvent, AnimationType, IconSide, StyleType} from "@type/Enums";
import Button from "@components/atoms/Button/Button";
import Image from "@components/atoms/Image/Image";
import FormExchange from "@components/organisms/Form/FormExchange/FormExchange";
import * as Yup from "yup";
import Form from "@components/organisms/Form/Form";
import CustomForm from "@components/organisms/Form/Form";
import {
    DownloadContainer,
    HomeContainer,
    InfoContainer,
    LeaderBoardContainer,
    LeftContainer,
    MainPrizeBackground,
    MainPrizeContainer,
    PrizeBackground,
    PrizeContainer,
    PrizeImageContainer,
    PrizesContainer,
    ProviderContainer,
    RightContainer,
    SectionContainer,
    TitleContainer,
    TournamentLogoContainer,
    VendorsContainer
} from "@views/Home/Home.styled";
import CustomImage from "@components/atoms/Image/Image";
import Video from "@components/atoms/Video/Video";
import Board from "@components/molecules/Board/Board";
import Title from "@components/atoms/Title/Title";
import Points from "@components/atoms/Points/Points";
import React, {useEffect, useState} from "react";
import {fetchLeaderboard, LeaderboardEntry} from "@api/endpoints/leaderboard";
import useCountdownTimer from "../../../hooks/useCountdownTimer";
import {fetchStreamlitLeaderboard, StreamlitLeaderboardResponse} from "@api/endpoints/streamlitLeaderboard";
import Spark from "@components/atoms/Spark/Spark";
import Particle from "@components/atoms/Particle/Particle";
import Particles from "@components/atoms/Particles/Particles";

const Home = () => {
    const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry>({
        "GameId": "",
        "GameVersion": "",
        "LeaderboardGameVersion": "",
        "QueueName": "",
        "TimeScope": "",
        "DateFrom": "",
        "DateTo": "",
    });
    const [streamlitData, setStreamlitData] = useState<StreamlitLeaderboardResponse>({
        "nicknames": [],
        "data": [],
    });
    const [targetDate, setTargetDate] = useState(new Date().toISOString());
    const timer = useCountdownTimer(targetDate);
    const MINIMUM_PLAYERS = 12;

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchLeaderboard();
            setLeaderboardData(data);
        };

        fetchData().catch((e) => {
            console.error(e);
        });
    }, []);

    useEffect(() => {
        console.log(streamlitData);
        console.log(streamlitData?.nicknames);
    }, [streamlitData]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchStreamlitLeaderboard();
            setStreamlitData(data);
        };

        fetchData().catch((e) => {
            console.error(e);
        });
    }, []);


    useEffect(() => {
        const intervalId = setInterval(() => {
            const fetchData = async () => {
                const data = await fetchStreamlitLeaderboard();
                setStreamlitData(data);
            };

            fetchData().catch((e) => {
                console.error(e);
            });
        }, 15000); // in milliseconds

        return () => clearInterval(intervalId); //This is important
    }, []);

    // const leaderboardTimer = leaderboardData !== null ? leaderboardData?.DateTo : 'Loading...'
    useEffect(() => {
        if (leaderboardData) {
                try {
                    setTargetDate(new Date(leaderboardData.DateTo)?.toISOString());

                } catch (e) {
                    console.error('Error parsing date:', leaderboardData.DateTo);
                    console.error(e);
                }
            }
    }, [leaderboardData]);

    const hours = timer.hours || 0;
    const minutes = timer.minutes || 0;
    const seconds = timer.seconds || 0;
    const timerDisplay = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    let leaderboardDataConverted: {name: string, points: number}[] = [];
    if (streamlitData) {
        leaderboardDataConverted = streamlitData.data.map((entry) => {
            const nicknameEntry = streamlitData.nicknames.find(
                (nickname) => nickname.elympics_user_id === entry.userId
            );
            return {
                name: nicknameEntry ? nicknameEntry.nickname : "Unknown",
                points: Math.round(entry.points),
            };
        });

        // if less than MINIMUM_PLAYERS, fill up the array with placeholders
        while (leaderboardDataConverted.length < MINIMUM_PLAYERS) {
            leaderboardDataConverted.push({
                name: "-",
                points: 0,
            });
        }
    }

    return (
        <MainTemplate>
            <HomeContainer>
                <LeftContainer>
                    <Card style={{overflow: 'visible'}} body={false}>
                        <LeaderBoardContainer>
                            <TitleContainer justifyContent={'space-between'}>
                                <Title size="1.5rem"
                                       weight="700"
                                       textAlign="left"
                                       color1="#56914c"
                                       color2="#56914c">
                                    <span>Leaderboard<br/> closes in</span>
                                    <span>Leaderboard<br/> closes in</span>
                                </Title>
                                <Title size="2.5rem"
                                       animate={true}
                                       whiteSpace="nowrap"
                                       weight="800"
                                       textBorderColor="#000"
                                       textBorderSize="1.5px"
                                       color1="#fa2021"
                                       color2="#e70c60">
                                    <span>{timerDisplay}</span>
                                    <span>{timerDisplay}</span>
                                </Title>
                            </TitleContainer>

                            {streamlitData && <Board items={leaderboardDataConverted} />}
                        </LeaderBoardContainer>
                    </Card>
                </LeftContainer>
                <RightContainer>
                    <TournamentLogoContainer>
                        <CustomImage src={'/images/logo/logo_tournament.png'}
                                     alt={''}
                                     width={600}
                                     height={75}/>
                    </TournamentLogoContainer>

                    <Card body={false} type={'secondary'}>
                        <TitleContainer justifyContent={'center'}>
                            <Title
                                   size="2.5rem"
                                   textAlign={'left'}
                                   whiteSpace="nowrap"
                                   weight="800"
                                   textBorderColor="#000"
                                   textBorderSize="1.5px"
                                   color1="#fbd924"
                                   color2="#fb9d05">
                                <span>Prize Pool Over</span>
                                <span>Prize Pool Over</span>
                            </Title>
                            <CustomImage  animate={true}
                                        src={'/images/icons/currencies/dollar.png'}
                                         alt={''}
                                         width={32}
                                         height={54}/>
                            <Title size="3.5rem"
                                   animate={true}
                                   textAlign={'left'}
                                   whiteSpace="nowrap"
                                   weight="800"
                                   textBorderColor="#000"
                                   textBorderSize="1.5px"
                                   color1="#fbd924"
                                   color2="#fb9d05"><span>3 300</span><span>3 300</span></Title>
                        </TitleContainer>

                        <InfoContainer>
                            <PrizesContainer>
                                <PrizeContainer marginTop={'auto'}>
                                    <Points points={'300+'}/>
                                    <PrizeImageContainer>
                                        <CustomImage src={'/images/icons/prizes/Shot.png'}
                                                     alt={''}
                                                     width={80}
                                                     height={95}/>
                                    </PrizeImageContainer>
                                    <Label fontWeight={'bold'}
                                           color={'#7ecb58'}
                                           lineHeight={2.5}
                                           size={22}
                                           whiteSpace={'nowrap'}>
                                        SHOT!
                                    </Label>
                                    <Label fontWeight={'bold'}
                                           color={'#7ECB585F'}
                                           whiteSpace={'nowrap'}>
                                        Till you drink us out
                                    </Label>
                                </PrizeContainer>
                                <PrizeContainer marginTop={'auto'}>
                                    <Points points={'1000+'}/>
                                    <PrizeImageContainer>
                                        <CustomImage
                                            src={'/images/icons/prizes/Tricket.png'}
                                            alt={''}
                                            width={120}
                                            height={88}/>
                                    </PrizeImageContainer>

                                    <Spark color={'Gold'} width={30} height={30} left={"2%"} top={"20%"}/>
                                    <Label fontWeight={'bold'}
                                           color={'#7ecb58'}
                                           size={22}
                                           textAlign={'center'}
                                           whiteSpace={'nowrap'}>
                                        NBX Berlin<br/>ticket
                                    </Label>
                                    <Label
                                        fontWeight={'bold'}
                                           color={'#7ECB585F'}
                                           whiteSpace={'nowrap'}>
                                        10 a day in stock
                                    </Label>
                                </PrizeContainer>
                                <PrizeContainer marginTop={'auto'}>
                                    <Points useTitle={false} points={'#1 place'}/>
                                    <PrizeImageContainer>
                                        <CustomImage src={'/images/icons/prizes/Tricket_VIP.png'}
                                                     alt={''}
                                                     width={155}
                                                     height={95}/>
                                    </PrizeImageContainer>
                                    <Spark color={'Gold'} width={25} height={25} left={"-3%"} top={"30%"}/>
                                    <Spark color={'Gold'} width={20} height={20} right={"0"} top={"5%"}/>
                                    <Spark color={'Gold'} width={30} height={30} right={"15%"} top={"35%"}/>

                                    <Label fontWeight={'bold'}
                                           color={'#7ecb58'}
                                           size={22}
                                           textAlign={'center'}
                                           whiteSpace={'nowrap'}>
                                        VIP NBX<br/>Berlin ticket
                                    </Label>
                                    <Label marginTop={'auto'}
                                            fontWeight={'bold'}
                                           color={'#7ECB585F'}
                                           whiteSpace={'nowrap'}>
                                        1 a day
                                    </Label>
                                    <Particles animationTime={'8s'} width={200} height={200} color={'Gold_Blur'}  top={"-25%"}/>
                                    <Particles animationTime={'10s'} width={200} height={200} color={'Gold_Shinyyy'} top={"-25%"}/>
                                    <Particles animationTime={'12s'} width={200} height={200} rotate={"45"} color={'Gold_Blur'} top={"-25%"}/>
                                    <Particles animationTime={'14s'} width={200} height={200} rotate={"45"} color={'Gold_Blur'} top={"-25%"}/>
                                </PrizeContainer>
                            </PrizesContainer>
                            <PrizesContainer>
                                <MainPrizeContainer marginTop={"0"}>
                                    <Title size="1.6rem"
                                           textAlign={'center'}
                                           whiteSpace="nowrap"
                                           weight="800"
                                           textBorderColor="#000"
                                           textBorderSize="1px"
                                           color1="#fbd924"
                                           color2="#fb9d05">
                                        <span>ULTIMATE</span>
                                        <span>ULTIMATE</span>
                                    </Title>
                                    <Title size="1.4rem"
                                           textAlign={'center'}
                                           whiteSpace="nowrap"
                                           weight="800"
                                           textBorderColor="#000"
                                           textBorderSize="1px"
                                           color1="#fbd924"
                                           color2="#fb9d05">
                                        <span>HIGH SCORE PRIZE</span>
                                        <span>HIGH SCORE PRIZE</span>
                                    </Title>
                                    <PrizeImageContainer>
                                        <CustomImage src={'/images/icons/prizes/Grand_Prize.png'}
                                                     animate={true}
                                                     alt={''}
                                                     width={78}
                                                     height={95}/>
                                    </PrizeImageContainer>
                                    <Label fontWeight={'bold'}
                                           color={'white'}
                                           size={22}
                                           textAlign={'center'}
                                           whiteSpace={'nowrap'}>
                                        Keystone<br/>Hardware Wallet
                                    </Label>
                                    <Spark color={'Blue'} width={30} height={30} left={"20%"} top={"30%"}/>
                                    <Spark color={'Blue'} width={40} height={40} left={"20%"} bottom={"25%"}/>
                                    <Spark color={'Blue'} width={30} height={30} right={"20%"} top={"40%"}/>
                                    <Particles color={'Blue_Blur'} left={"-17%"}/>
                                    <Particles color={'Blue_Shinyyy'} left={"-17%"}/>
                                    <Particles rotate={"45"} color={'Blue_Blur'} left={"-17%"}/>
                                    <Particles rotate={"45"} color={'Blue_Shinyyy'} left={"-17%"}/>
                                </MainPrizeContainer>
                            </PrizesContainer>
                        </InfoContainer>

                    </Card>
                    <SectionContainer>
                        <Video         className={'shadow-xl'}
                                        frameBorder="0"
                                       fit={'cover'}
                                       width={585}
                                       allowFullScreen={false} // Usuwanie nawigacji (przycisk fullscreen)
                                       allow="autoplay; fullscreen" // Dodanie atrybutu 'autoplay' i dozwolonego fullscreen
                                       height={330} src={'/videos/vid.mp4'} autoPlay loop/>
                        <DownloadContainer>
                            <CustomImage className={'shadow-xl'} src={'/images/qr/QR_code.png'} alt={''} width={200} height={200}></CustomImage>
                            <VendorsContainer>
                                <CustomImage className={'shadow-xl'} src={'/images/vendors/Download_Button_AppStore.png'} alt={''} width={200} height={58}></CustomImage>
                                <CustomImage className={'shadow-xl'} src={'/images/vendors/Download_Button_Google.png'} alt={''} width={200} height={58}></CustomImage>
                            </VendorsContainer>
                        </DownloadContainer>
                    </SectionContainer>

                    <ProviderContainer>
                        <CustomImage style={{filter: 'brightness(0)'}} src={'/images/vendors/Powered_By.png'} alt={''} width={300} height={33}></CustomImage>
                    </ProviderContainer>


                </RightContainer>
            </HomeContainer>


        </MainTemplate>
    );
};

export default Home;


