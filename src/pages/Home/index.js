import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import * as ScreenOrientation from 'expo-screen-orientation';

import VideosList from '../../Database/videos.json';
import VideosListw from '../../Database/web.json';
import VideosListb from '../../Database/bancodedos.json';
import Header from "../../components/Header";
import Videos from "../../components/Videos";
import Poster from "../../components/Poster";

const Container = styled.ScrollView`
    flex: 1;
    background-color: #140100;
`;

async function changeScreenOrientation(){
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
}

export default function Home(){
    changeScreenOrientation();
    return(
        <>
            <StatusBar 
                translucent 
                backgroundColor="transparent" 
                barStyle="light-content"
            />
            <Container>
                <Poster
                    url={"https://raw.githubusercontent.com/gcairesdev/devflix/master/assets/splash.png"}
                    title={
                        "Cursos de Tecnologia do SENAI"
                    }
                    tags={["React Native", "Expo"]}
                    content={<Header />}
                ></Poster>
                <Videos label="Banco de dados" videos={VideosListb}> </Videos>
                <Videos label="Desenvolvimento de Sistema Web" videos={VideosListw}> </Videos>
                <Videos label="Desenvolvimento de Sistema Mobile" videos={VideosList}> </Videos>
            </Container>
        </>
        
    );
}

