import {View, Text, TouchableOpacity, Image} from 'react-native';
import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

import title from '../../assets/title.png'

export const AboutImage = styled.Text`
 font-size: 20px;
 color:white;
 font-weight:bold;
 margin-left:25px;
 
`;
export const AboutImage_image = styled.Image`
    width:200px;
    height:200px;
    border-radius: 10px;
    padding:10px;
    margin:10px;
 
`;

export const Background = ({children}) => {
    return(
    <LinearGradient colors={['#0B96C5','#1D1E1F']} style={{flex:1}}>  
        {children}
    </LinearGradient> 
)};
 
export const Text_content = styled.Text`
    font-size:22px;
    text-align:center;
    padding:10px;
    color:white;
`;

const Title_box = styled.View`
   justify-content:center;
   align-items:center;
   display:flex; 
   margin-top:25%;
`;
const Title_Image = styled.Image`
    resize-mode:contain; 
    position:absolute;
    width:450px; 
    height:450px;
`;
export const Title = styled.Text`
   font-weight:bold;
   font-size:28px;
   border-radius:10px;
   text-align:center;
   margin-top:5%;
   color:#fff;
   background-color:#1D1E1F;
   margin:40px;
`;
export const Button = styled.TouchableOpacity`
  
    `;
export const Button_text = styled.Text`
    color:#fff;
    background-color: #1D1E1F;
    width:250px;
    height:60px;
    border-radius:10px;    
    margin:12px;
    padding:10px;
    font-size:16px; 
    elevation:20;
`;
export const Content = styled.View`
    flex:1;
    border-radius:20px
    text-align:justify;
    margin-top:150px;
    padding:10px;
    background-color: #1D1E1F;


`;

export default function HomeScreen({navigation}){
    return(
        <Background>  
            <Title_box>
                <Title_Image source={title} />
            </Title_box>
            <View style={{marginTop:75}}>
                <Button>
                    <Button_text onPress={()=> navigation.navigate('What')}>O que é ?</Button_text> 
                    <Button_text onPress={()=> navigation.navigate('How')}>Como funciona ?</Button_text>               
                    <Button_text onPress={()=> navigation.navigate('Samples')}>Curiosidades</Button_text>
                    <Button_text onPress={()=> navigation.navigate('AboutUs')}>Sobre nós</Button_text>
                
                </Button>
            </View>
        </Background>
    );


}
