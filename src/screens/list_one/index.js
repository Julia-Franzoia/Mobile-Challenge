import React, {useEffect, useState} from 'react';
import {
  Container,
  Background,
  Title,
  FilterView,
  FilterFlatList,
  TitleSecondary,
  SearchView,
  ListAreaView,
} from './style';

import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native';

import Hamburger from '../../assets/images/iconHamburger.svg';
import Pizza from '../../assets/images/iconPizza.svg';
import Bebidas from '../../assets/images/iconBebida.svg';
import Peixe from '../../assets/images/iconPeixe.svg';
import Massa from '../../assets/images/iconMassa.svg';
import iconSearch from '../../assets/images/iconSearch.svg';

import Header from '../../components/Header';
import InfoList from '../../components/InfoList';
import InputSearch from '../../components/inputSearch';
import RestaurantsList from '../../components/RestaurantsList';

export default () => {
  const navigation = useNavigation();
  const [searchField, setSearchField] = useState('');

  const obj = [
    {
      id: 1,
      title: 'FAST FOOD',
      image: <Hamburger width="35" height="35" />,
    },
    {
      id: 2,
      title: 'PiZZA',
      image: <Pizza width="35" height="35" />,
    },
    {
      id: 3,
      title: 'BEBIDAS',
      image: <Bebidas width="35" height="35" />,
    },
    {
      id: 4,
      title: 'PEIXE',
      image: <Peixe width="35" height="35" />,
    },

    {
      id: 5,
      title: 'MASSA',
      image: <Massa width="35" height="35" />,
    },

    {
      id: 6,
      title: 'FAST FOOD',
      image: <Hamburger width="35" height="35" />,
    },
    {
      id: 7,
      title: 'PiZZA',
      image: <Pizza width="35" height="35" />,
    },
    {
      id: 8,
      title: 'BEBIDAS',
      image: <Bebidas width="35" height="35" />,
    },
    {
      id: 9,
      title: 'PEIXE',
      image: <Peixe width="35" height="35" />,
    },

    {
      id: 10,
      title: 'MASSA',
      image: <Massa width="35" height="35" />,
    },
  ];

  const {parms} = useRoute;
  useEffect(() => {
    console.log(parms);
  }, []);
  return (
    <Container>
      <Header />

      <Background />
      <Title>ESCOLHA O QUE DESEJA </Title>
      <FilterView>
        <FilterFlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={obj}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <InfoList title={item?.title} image={item?.image} />
          )}
        />
      </FilterView>

      <TitleSecondary>RESTAURANTES PRÓXIMOS A VOCÊ </TitleSecondary>

      <SearchView>
        <InputSearch
          IconSvg={iconSearch}
          placeholder="Pesquise aqui"
          value={searchField}
          onChangeText={t => setSearchField(t)}
        />
      </SearchView>

      <ListAreaView>
        <ScrollView>
          <RestaurantsList />
        </ScrollView>
      </ListAreaView>
    </Container>
  );
};
