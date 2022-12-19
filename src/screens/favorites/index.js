import React, {useEffect, useState} from 'react';
import {
  Container,
  Background,
  Title,
  ListAreaView,
} from './style';

import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native';


//Components
import Header from '../../components/headers/HeaderFavorites';
import FavoritesList from '../../components/FavoritesList';

export default () => {
  const navigation = useNavigation();


  const {parms} = useRoute;
  useEffect(() => {
    console.log(parms);
  }, []);
  return (
    <Container>
      <Header />
      <Background />
      <Title>SEUS RESTAURANTES FAVORITOS</Title>
      <ListAreaView>
        <ScrollView>
          <FavoritesList />
        
        </ScrollView>
      </ListAreaView>
    </Container>
  );
};
