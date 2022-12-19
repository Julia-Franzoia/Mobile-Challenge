import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import Talher from '../assets/images/iconRestaurantBranco.svg';
import Imagem from '../assets/images/image_header.svg';
import Voltar from '../assets/images/voltar.svg';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Icon = styled(Talher)``;

export const TextArea = styled.View`
  flex-direction: row;
  position: absolute;
  width: 100%;
  z-index: 999;
  left: 0;
  margin-top: 15%;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
`;


export const ImagemFundo = styled(Imagem)`
  width: 100% !important;
`;

export default () => {
  return (
    <Container>
     

      <TextArea>
        <Icon />
        <Title>RESTAURANTES LIST</Title>
      </TextArea>
      <ImagemFundo />
    </Container>
  );
};
