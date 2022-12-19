import React, {useEffect, useContext, useState, useCallback} from 'react';
import {
  Container,
  Background,
  AreaView,
  Title,
  TitleSecondary,
  Icon,
  TextSimple,
  ServicesAreaView,
  TextStatus,
  AreaViewConteudo,
  TitleContato,
  TitleMorada,
  TextConteudo,
  TitleCozinha,
  TitleSobre,
  AreaFavoriteView, 
  StarOn, 
  StarOff
} from './style';
import {Image, Text, View, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Cozinha from '../../assets/images/iconCozinha';

import Header from '../../components/headers/HeaderDetails';

import Take from '../../assets/images/iconTake';
import Delivery from '../../assets/images/iconDelivery';
import On from '../../assets/images/iconOn';
import Marker from '../../assets/images/iconMarker';
import Phone from '../../assets/images/iconFone';
import Email from '../../assets/images/iconEmail';

import Api from '../../services/Api';


export default () => {
  const navigation = useNavigation();
  const [mealType, setMealType] = useState({});
  const [cuisines, setCuisines] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
 
  const {params} = useRoute();

  useFocusEffect(
    useCallback(() => {
      
      console.log(params);

      Api.details(params?.id)
        .then(async response => {
          const restaurantes = await response?.data;

          let obj = {
            image: restaurantes?.image?.url,
            name: restaurantes?.name,
            mealType: restaurantes?.mealType,
            id: restaurantes?._id,
            delivery: 'Delivery',
            take: 'Take Away',
            status: 'Aberto',
            telefone: restaurantes?.contacts?.phoneNumber,
            email: restaurantes?.contacts?.email,
            endereco: restaurantes?.addressInfo?.address,
            cidade: restaurantes?.addressInfo?.city,
            cp: restaurantes?.addressInfo?.postalCode,
            pais: restaurantes?.addressInfo?.country,
            sobre:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
          };

          const dataCuisines = restaurantes?.cuisines

          console.log(dataCuisines)

          if(dataCuisines.length > 0){

            let arr = [] 

            dataCuisines?.map(item => {

              let obj = {
                  name: item?.name?.en
              }

              arr?.push(obj)

            })
            
            setCuisines(arr)
          } else { 
            
            let arr = [
              {
                name: 'Não há cozinhas cadastradas'
              }
            ]

            setCuisines(arr)

          }

          setMealType(obj);
        })
        .catch(err => console.log(err));

        verifyMealType()
    }, []),
  );


  const setItemAsync = async (key, value) => {
    let strValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, strValue);
  };
  
  const getItemAsync = async key => {
    let strValue = await AsyncStorage.getItem(key);
    let parsedValue = JSON.parse(strValue);
    return parsedValue;
  };

  const verifyMealType = async () => {
    const asyncMealTypeData = await getItemAsync('favorite');

    asyncMealTypeData?.map((item) => {
      console.log('restaurante', mealType);
      console.log('favoritos', item);
      if (params?.id == item?.id)
        if (mealType?.favorite == true || item?.favorite == true) {
          console.log('sou favorito');
          setIsFavorite(true);
        } else {
          console.log(':: Favorito :: \n\n', mealType?.favorite);
        }
    });
  };

  const handleFavorite = async () => {
    const asyncProductData = await getItemAsync('favorite');

    let data = {};

    asyncProductData?.map((item) => {
      console.log('dados', item);
      if (item?.id == mealType?.id) {
        data = item;
      }
    });

    console.log('data Execução\n\n', data);
    if (data?.favorite != true) {
      const response = await getItemAsync('favorite');
      if (response === null) {
        const favoriteRestaurant = {
          id: mealType?.id,
          name: mealType?.name,
          image: mealType?.image,
          delivery: mealType?.delivery,
          take: mealType?.take,
          favorite: true,
        };
        const arr = [];
        console.log(favoriteRestaurant)
        arr.push(favoriteRestaurant);
        console.log('\n\nteste Primeira Execução\n\n', arr);
        await setItemAsync('favorite', arr);
      } else {
        const favoriteRestaurant = {
          id: mealType?.id,
          name: mealType?.name,
          image: mealType?.image,
          delivery: mealType?.delivery,
          take: mealType?.take,
          favorite: true,
        };
        const response = await getItemAsync('favorite');
        const arr = [];

        response?.map((item) => {
          arr.push(item);
        });

        arr.push(favoriteRestaurant);
        console.log('\n\nExecução\n\n', arr);
        await setItemAsync('favorite', arr);
      }
    } else {
      const asyncMealType = await getItemAsync('favorite');
      const arr = [];
      asyncMealType?.map((item) => {
        if (item?.id !== mealType?.id) {
          arr.push(item);
        }
      });
      console.log(arr);
      await setItemAsync('favorite', arr);

      console.log('Execução');
    }
  };

  return (
    <Container>
      <Header />
      <Image
        source={{uri: mealType?.image}}
        style={{
          width: '100%',
          height: 300,
        }}
      />
      <LinearGradient
        colors={['#FF8D0720', '#FF8D0720']}
        style={{position: 'absolute', zIndex: 999, flex: 1}}
      />
      <Background />
      <AreaFavoriteView>
      {isFavorite && (
                  <StarOn width="25" height="25" onPress={
                    () => {setIsFavorite(!isFavorite)
                    handleFavorite();
                    }
                  }/>
              )}
              {!isFavorite && (
                <StarOff width="25" height="25" onPress={
                  () => {setIsFavorite(!isFavorite)
                  handleFavorite();
                  }
                }/>
              )}
      </AreaFavoriteView>
      <AreaView>
        <Icon />
        <Title>{mealType?.name}</Title>
        <TitleSecondary>{mealType?.mealType}</TitleSecondary>
      </AreaView>
      <ServicesAreaView>
        <TextStatus>
          <On /> {mealType?.status}
        </TextStatus>
        <TextSimple>
          <Delivery /> {mealType?.delivery}
        </TextSimple>
        <TextSimple>
          <Take /> {mealType?.take}
        </TextSimple>
      </ServicesAreaView>

      <AreaViewConteudo>
     
        <TitleMorada>MORADA</TitleMorada>
        <TextConteudo>
          <Marker /> {mealType?.endereco}
        </TextConteudo>
        <TextConteudo style={{marginTop: '14%', marginLeft: 10, height: 50}}>
          {' '}
          {mealType?.cidade}, {mealType?.cp}
        </TextConteudo>
        <TextConteudo style={{marginTop: '21%', marginLeft: 10, height: 50}}>
          {' '}
          {mealType?.pais}
        </TextConteudo>

        <TitleContato>CONTATOS</TitleContato>
        <TextConteudo style={{marginTop: '36%', marginLeft: 10, height: 50}}>
          <Phone /> {mealType?.telefone}
        </TextConteudo>
        <TextConteudo style={{marginTop: '40%', marginLeft: 10, height: 50}}>
          <Email /> {mealType?.email}
        </TextConteudo>
        <TitleCozinha>COZINHA</TitleCozinha>

        {
            cuisines?.map((item, index) => 
            <TextConteudo key={index} style={{marginTop: `${58+index*4}%`, marginLeft: 10, height: 50}}><Cozinha /> {item?.name}</TextConteudo>)
          }

        <TitleSobre>SOBRE O RESTAURANTE</TitleSobre>
        <TextConteudo style={{marginTop: '80%', padding: 5}}>{mealType?.sobre}</TextConteudo>

      
      </AreaViewConteudo>
    </Container>
  );
};