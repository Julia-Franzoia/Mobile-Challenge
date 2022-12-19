import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text} from 'react-native';
import styled from 'styled-components/native';


import Voltar from '../../assets/images/voltar.svg';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const TextArea = styled.View`
  flex-direction: row;
  position: absolute;
  width: 100%;
  z-index: 999;
  left: 0;
  margin-top: 20%;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
`;

export const ButtonArea = styled.TouchableOpacity`
  position: absolute;
  width: 100%;
  z-index: 999;
  margin-left: 5%;
  margin-top: 5%;
`;

export const BtnVoltar = styled(Voltar)``;



export default () => {

  const navigation = useNavigation();

  const handleBackButtonClick = () => {
    navigation.goBack()
  };

  return (
    <Container>
      <ButtonArea>
        <BtnVoltar onPress={handleBackButtonClick} />
      </ButtonArea>
    </Container>
  );
};
