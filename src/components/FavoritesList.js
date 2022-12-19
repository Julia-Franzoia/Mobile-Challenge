import React, {useEffect, useContext, useState, useCallback} from 'react';
import {Text, Image, ScrollView} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';


import StarFavorite from '../assets/images/iconStarF.svg';
import Star from '../assets/images/iconStar.svg';

import Like from '../assets/images/iconLike';
import Cozinha from '../assets/images/iconCozinha';
import Take from '../assets/images/iconTake';
import Delivery from '../assets/images/iconDelivery';


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
  const navigation = useNavigation();
  
  const [reload, setReload] = useState(0);
  
  const handleRemoveFavorite = async (id) => {
   
      const asyncMealType = await getItemAsync('favorite');
      const arr = [];
      asyncMealType?.map((item) => {
        if (item?.id !== id) {
          arr.push(item);
        }
      });
      console.log(arr);
      await setItemAsync('favorite', arr);
      setReload(reload + 1)
      console.log('Execução');

  };

  const handleDetailsButtonClick = id => {
    console.log(id);
    navigation.navigate('Details', {id});
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let like = getRandomInt(100);

  const [favorite, setFavorite] = useState([])

  const getItemAsync = async key => {
    let strValue = await AsyncStorage.getItem(key);
    let parsedValue = JSON.parse(strValue);
    return parsedValue;
  };
  
  const setItemAsync = async (key, value) => {
    let strValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, strValue);
  };

  const handleGetFavorite = async () => {

    const response = await getItemAsync('favorite')

    console.log(JSON.stringify(response))
    setFavorite(response)

  }

  useFocusEffect(
    useCallback(() => {
     handleGetFavorite()
        
    }, [reload]),
  );
  return (
    <Container>
      {favorite?.map((item, index) => (
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
                  <StarOn width="15" height="15" onPress={
                    () => {
                    handleRemoveFavorite(item?.id);
                    }
                  }/>
             
              
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
