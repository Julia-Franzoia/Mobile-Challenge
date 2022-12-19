import React from 'react';
import styled from 'styled-components/native';
import Talher from '../../assets/images/talher.svg';
import Imagem from '../../assets/images/logo_min.svg';

export const Container = styled.SafeAreaView`
  background-color: #1441f7;
  flex: 1;
`;

export const ViewImage = styled.TouchableOpacity`
 
`;

export const AreaTitle = styled.View`
  top: 0;
  position: absolute;
  padding: 20px;
  flex-direction: row;
  margin-top: 20%;
`;

export const Images = styled.View`
  border: 2px solid;
  border-color: #fff;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
`;

export const TextArea = styled.View`
  position: absolute;
  margin-top: 15%;
  width: 100%;
`;

export const Mask = styled.View`
  background-color: rgba(57, 57, 57, 0.5);
  z-index: 999;
`;

export const TitleImage = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 9999;
`;

export const Icon = styled(Talher)``;

export const Logo = styled(Imagem)`
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;
