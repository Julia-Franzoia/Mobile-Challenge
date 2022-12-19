import React, {useEffect, useContext, useState, useCallback} from 'react';
import {ScrollView, Image} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  Container,
  AreaTitle,
  Title,
  Icon,
  Logo,
  TextArea,
  TitleImage,
  Mask,
  ViewImage
} from './style';

import Api from '../../services/Api';

export default () => {
  const [mealType, setMealType] = useState([]);
  const navigation = useNavigation();

  const handleListButtonClick = (id) => {
    navigation.navigate('ListOne', {id})
  };

  //Esse useFocus garante um melhor retorno para as informações

  useFocusEffect(
    useCallback(() => {
      Api.all()
        .then(async response => {
          const restaurantes = await response?.data?.docs;
          let arr = [];

          restaurantes?.map(item => {
            if (
              item?.mealType !== undefined &&
              item?.image?.url !== undefined
            ) {
              let obj = {
                image: item?.image?.url,
                mealType: item?.mealType,
                id: item?._id,
              };
              arr.push(obj);
            }
          });
          setMealType(arr);
        })
        .catch(err => console.log(err));
    }, []),
  );

  return (
    <Container>
      <Logo />
      <AreaTitle>
        <Icon />
        <Title> ESCOLHA O QUE DESEJA </Title>
      </AreaTitle>
      {/* Aqui puxamos a lista */}

      <ScrollView style={{marginTop: '15%', backgroundColor: '#FFF' }}>
        {mealType?.map((item, index) => (
          <ViewImage key={index} onPress={()=>{handleListButtonClick(item?.id)}}>
            <TextArea imagem={item?.image}>
              <TitleImage>{item?.mealType}</TitleImage>
            </TextArea>
            <Mask>
              <Image
                source={{uri: item?.image}}
                style={{
                  width: '100%',
                  height: 150,
                  borderWidth: 5,
                  borderColor: '#FFFF',
                  zIndex: 1,
                }}
              />
            </Mask>
          </ViewImage>
        ))}
      </ScrollView>
    </Container>
  );
};
