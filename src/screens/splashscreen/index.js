import React, {useEffect, useContext} from 'react';
import {Container, LoadingIcon} from './style';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Import da imagem
import Logo from '../../assets/images/logo.svg';

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {

        
        //Null
      } else {
        navigation.reset({
          routes: [{ name: 'MainTab' }]
      });
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <Logo width="100%" height="160" />
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );
};
