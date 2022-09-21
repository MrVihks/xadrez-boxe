import styled from "styled-components/native";
import { Background, Content, Text_content, Title } from "./HomeScreen";

export default function HowScreen({navigation}){
    return(
        <Background>
            <Content>
                <Text_content>As regras de Iepe determinam que uma disputa de boxe-xadrez é realizada em 11 rounds: seis de xadrez e cinco de boxe. Um round de xadrez dura quatro minutos e um de boxe, dois minutos. Para vencer o combate, o lutador-jogador precisa conseguir um nocaute no round de boxe ou um xeque-mate no xadrez</Text_content>
            </Content>  
        </Background>
    )
}