import React from 'react';
import styled from 'styled-components/native';

import Home from '../assets/images/iconRestaurant.svg';
import ListOne from '../assets/images/iconList.svg';
import ListTwo from '../assets/images/iconSwiper.svg';
import Favorites from '../assets/images/iconStarTab.svg';
import Peril from '../assets/images/iconPerfil.svg';

const TabArea = styled.View`
  height: 60px;
  background-color: #1441F7;
  flex-direction: row;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.4);
`;

const Circle = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background-color: #fff;
  border: 5px #1441F7;
  justify-content: center;
  margin-bottom: 20px;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TextItem = styled.Text`
  color: #fff;
  font-size: 10px;
  justify-content: center;
  text-align: center;
  margin-top: 5px;
`;

export default ({state, navigation}) => {
  const goTo = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo('ListOne')}>
        <ListOne
          style={{opacity: state.index === 1 ? 1 : 0.5}}
          width="24"
          height="24"
        />
        <TextItem style={{opacity: state.index === 1 ? 1 : 0.5}}>
          Restaurantes
        </TextItem>
      </TabItem>

      <TabItem onPress={() => goTo('ListOne')}>
        <ListTwo
          style={{opacity: state.index === 2 ? 1 : 0.5}}
          width="24"
          height="24"
        />
        <TextItem style={{opacity: state.index === 2 ? 1 : 0.5}}>
          Opção 2
        </TextItem>
      </TabItem>

      <TabItem onPress={() => goTo('Filter')}>
        <Circle>
          <Home
          style={{marginLeft: 'auto', marginRight: 'auto', opacity: state.index === 0 ? 1 : 9}}
           
          />
        </Circle>
      </TabItem>
      <TabItem onPress={() => goTo('Favorites')}>
        <Favorites
          style={{opacity: state.index === 3 ? 1 : 0.5}}
          width="24"
          height="24"
        />
        <TextItem style={{opacity: state.index === 3 ? 1 : 0.5}}>
          Favoritos
        </TextItem>
      </TabItem>
      <TabItem onPress={() => goTo('Profile')}>
        <Peril
          style={{opacity: state.index === 4 ? 1 : 0.5}}
          width="24"
          height="24"
        />
        <TextItem style={{opacity: state.index === 4 ? 1 : 0.5}}>
          Perfil
        </TextItem>
      </TabItem>
    </TabArea>
  );
};
