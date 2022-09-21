import styled from "styled-components/native";
import { Background, Title, Content, AboutImage, AboutImage_image, Text_content} from "./HomeScreen";
import {View, Text, ScrollView} from 'react-native';

import victu from '../../assets/victu.jpeg';
import miguel from '../../assets/miguel.jpeg';
import vinicius from '../../assets/vinicius.jpeg';
import kauan from '../../assets/kauan.jpg';
import murilo from '../../assets/murilo.jpg';


export default function AboutUsScreen({navigation}){
    return(
        
        <Background>
            <Content>
                <ScrollView>
                    <AboutImage>Miguel Henrique</AboutImage>  
                    <AboutImage_image source={miguel}/>
                    <AboutImage>Vinicius Henrique</AboutImage>  
                    <AboutImage_image source={vinicius}/>  
                    <AboutImage>Victor Reis</AboutImage>  
                    <AboutImage_image source={victu}/>  
                    <AboutImage>Murilo</AboutImage>  
                    <AboutImage_image source={murilo}/>   
                    <AboutImage>Kauan</AboutImage>  
                    <AboutImage_image source={kauan}/>    
                </ScrollView>
            </Content>
        </Background>
          
    )
};