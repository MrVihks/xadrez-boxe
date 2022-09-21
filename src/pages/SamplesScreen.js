import styled from 'styled-components';
import { Background, Title, Content, Text_content } from "./HomeScreen";
import {Text, View } from 'react-native';

export default function SamplesScreen({navigation}){
    return(
      <Background>
        <Content>
            <Text_content>- O primeiro campeão mundial de chessboxing foi o próprio criador Iepe Rubingh.</Text_content>
            <Text_content>- Os atuais campeões são Sven Rooch, Leonid Chernobaev e Nikolay Sazhin.</Text_content>
            <Text_content>- O presidente da WCBO continua sendo o mesmo até hoje, Iepe Rubingh.</Text_content>
            <Text_content>- Este esporte foi inspirado em uma série em quadrinhos.</Text_content>
        </Content>
      </Background>
    );
};