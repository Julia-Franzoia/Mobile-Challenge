import React, {useEffect, useContext, useState, useCallback} from 'react';
import {Text, Image, ScrollView, Alert} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import Api from '../services/Api';

import StarFavorite from '../assets/images/iconStarF.svg';
import Star from '../assets/images/iconStar.svg';

import Like from '../assets/images/iconLike';
import Cozinha from '../assets/images/iconCozinha';
import Take from '../assets/images/iconTake';
import Delivery from '../assets/images/iconDelivery';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Container = styled.SafeAreaView`
  margin-top: 2%;
`;

export const ViewList = styled.TouchableOpacity`
  flex-direction: row;
  padding: 2%;
  margin-bottom: 3%;
`;

export const TextAreaView = styled.View`
  flex-direction: column;
  width: 100%;
`;

export const TitleAreaView = styled.View`
  flex-direction: row;
`;

export const StatusBase = styled.View`
  width: 5px !important;
  margin-left: 55%;
  margin-top: 1%;
  height: 15px;
  position: absolute;
  text-align: center;
  border-radius: 50px;
`;

export const TextStatus = styled.Text`
  font-size: 13px;
  font-weight: 800;
  color: #308552;
  text-align: center;
`;

export const TitleRestaurant = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: #000;
  margin-left: 10px;
`;

export const TitleCozinha = styled.Text`
  font-size: 10px;
  font-weight: 400;
  color: #000;
  margin-left: 10px;
`;

export const TextSimple = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #000;
  margin-left: 10px;
`;

export const TextAvaliable = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: #000;
  margin-left: 10px;
`;

export const StarOn = styled(StarFavorite)``;
export const StarOff = styled(Star)``;


export default () => {
  const [mealType, setMealType] = useState([]);
  const navigation = useNavigation();

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
      if (item?.id)
        if (mealType?.favorite == true || item?.favorite == true) {
          console.log('sou favorito');
        } else {
          console.log(':: Favorito :: \n\n', mealType?.favorite);
        }
    });
  };

  const handleFavorite = async (obj) => {
    const asyncProductData = await getItemAsync('favorite');

    let data = {};

    asyncProductData?.map((item) => {
      console.log('dados', item);
      if (item?.id == obj?.id) {
        data = item;
      }
    });

    console.log('data Execução\n\n', data);
    if (data?.favorite != true) {
      const response = await getItemAsync('favorite');
      if (response === null) {
        const favoriteRestaurant = {
          id: obj?.id,
          name: obj?.name,
          image: obj?.image,
          delivery: obj?.delivery,
          take: obj?.take,
          favorite: true,
        };
        const arr = [];
        console.log(favoriteRestaurant)
        arr.push(favoriteRestaurant);
        console.log('\n\nteste Primeira Execução\n\n', arr);
        await setItemAsync('favorite', arr);
        Alert.alert('Sucesso', `${obj?.name} favoritado com sucesso`)
      } else {
        const favoriteRestaurant = {
          id: obj?.id,
          name: obj?.name,
          image: obj?.image,
          delivery: obj?.delivery,
          take: obj?.take,
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

        Alert.alert('Sucesso', `${obj?.name} favoritado com sucesso`)
      }
    } else {
      
      Alert.alert('Ops Item favoritado', `O ${obj?.name} já foi favoritado`)
     
      console.log('Execução');
    }
  };

  const handleDetailsButtonClick = id => {
    console.log(id);
    navigation.navigate('Details', {id});
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let like = getRandomInt(100);

  useFocusEffect(
    useCallback(() => {
      Api.all()
        .then(async response => {
          const restaurantes = await response?.data?.docs;
          let arr = [];
          restaurantes?.map(item => {
            now = new Date();
            console.log(now);

            {
              let obj = {
                image: item?.image?.url,
                name: item?.name,
                mealType: item?.mealType,
                id: item?._id,
                delivery: 'Delivery',
                take: 'Take Away',
                favorite: false
              };
              arr.push(obj);
            }
          });
          setMealType(arr);
        })
        .catch(err => console.log(err));

        verifyMealType()
    }, []),
  );

  return (
    <Container>
      {mealType?.map((item, index) => (
        <ViewList
          key={index}
          onPress={() => {
            handleDetailsButtonClick(item?.id);
          }}>
          <Image
            source={{uri: item?.image}}
            style={{
              width: 79,
              height: 78,
              left: 0,
              borderRadius: 10,
            }}
          />
          <TextAreaView>
            <TitleAreaView>
              <TitleRestaurant>
                

              {item?.favorite && (
                  <StarOn width="15" height="15" onPress={
                    () => {
                    handleFavorite(item);
                    }
                  }/>
              )}
              {!item?.favorite && (
                <StarOff width="15" height="15" onPress={
                  () => {
                  handleFavorite(item);
                  }
                }/>
              )}
                 {item?.name}
              </TitleRestaurant>
              <StatusBase>
                <TextStatus>Aberto</TextStatus>
              </StatusBase>
            </TitleAreaView>
            <TitleCozinha>
              <Cozinha /> {item?.mealType}
            </TitleCozinha>
            <TitleAreaView>
              <TextSimple>
                <Delivery /> {item?.delivery}
              </TextSimple>
              <TextSimple>
                <Take /> {item?.take}
              </TextSimple>
            </TitleAreaView>
            <TextAvaliable>
              <Like /> {like}%
            </TextAvaliable>
          </TextAreaView>
        </ViewList>
      ))}
    </Container>
  );
};
