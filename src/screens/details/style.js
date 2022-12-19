import React from 'react';
import styled from 'styled-components/native';
import StarFavorite from '../../assets/images/iconStarF.svg';
import Star from '../../assets/images/iconStar.svg';
import IconRestaurant from '../../assets/images/iconDetalhe.svg';
import Portugal from '../../assets/images/iconFlagPT.svg';

export const Container = styled.SafeAreaView``;

export const Background = styled.View`
  background-color: #fff;
  height: 100%;
  width: 100%;
  margin-top: -25%;
  border-top-left-radius: 80px;
`;

export const AreaView = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 5%;
  flex-direction: row;
  position: absolute;
  margin-left: -4%;
`;

export const TextStatus = styled.Text`
  font-size: 12px;
  font-weight: 800;
  color: #308552;
  margin-left: 10px;
`;

export const TitleMorada = styled.Text`
  font-size: 18px;
  width: 100%;
  color: #000;
  height:50px;
  font-weight: 800;
  margin-top: 5%;
  text-transform: uppercase;
  z-index: 9999;
`;

export const TitleContato = styled.Text`
  font-size: 18px;
  width: 100%;
  color: #000;
  font-weight: 800;
  margin-top: 30%;
  position: absolute;
  text-transform: uppercase;
  z-index: 9999;
`;

export const AreaViewConteudo = styled.View`
  flex: 1;
  width: 100%;

  margin-top: 80%;
  flex-direction: row;
  position: absolute;
  margin-left: 5%;
`;

export const TextConteudo = styled.Text`
  font-size: 14px;
  width: 100%;
  color: #000;
  font-weight: 500;
  height: 500px;
  margin-top: 10%;
  position: absolute;
  z-index: 9999;
`;



export const TitleCozinha = styled.Text`
  font-size: 18px;
  width: 100%;
  color: #000;
  font-weight: 800;
  margin-top: 50%;
  text-transform: uppercase;
  position: absolute;
  z-index: 9999;
`;

export const TitleSobre = styled.Text`
  font-size: 20px;
  width: 100%;
  color: #000;
  font-weight: 800;
  margin-top: 75%;
  position: absolute;
  text-transform: uppercase;
  z-index: 9999;
`;

export const TitleMaps = styled.Text`
  font-size: 20px;
  width: 100%;
  color: #000;
  font-weight: 800;
  margin-top: 51%;
  text-transform: uppercase;
  z-index: 9999;
`;

export const ServicesAreaView = styled.View`
  flex-direction: row;
  position: absolute;
  margin-top: 68%;
  margin-left: 24%;
`;

export const Icon = styled(IconRestaurant)`
  margin-top: 51%;
  margin-left: 10%;
`;

export const PortugalFlag = styled(Portugal)`
`;

export const Title = styled.Text`
  font-size: 20px;
  width: 100%;
  color: #72747a;
  font-weight: 800;
  margin-top: 51%;

  text-transform: uppercase;
  z-index: 9999;
`;

export const TitleSecondary = styled.Text`
  font-size: 12px;
  position: absolute;
  color: #72747a;
  font-weight: 400;
  margin-top: 58%;
  margin-left: 31%;
  text-transform: uppercase;
  z-index: 9999;
`;

export const AreaFavoriteView = styled.View`
  flex: 1;
  width: 100%;
 flex-direction: row;
 justify-content: flex-end;
 position:absolute;
 padding-right: 6%;
 margin-top: 40%;
 
  
`;

export const StarOn = styled(StarFavorite)``;
export const StarOff = styled(Star)``;

export const TextSimple = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #000;
  margin-left: 10px;
`;
