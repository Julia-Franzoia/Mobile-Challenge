import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #fff;
`;

export const Background = styled.View`
  background-color: #fff;
  height: 100%;
  width: 100%;
  margin-top: 47%;
  border-top-left-radius: 80px;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #000;
  font-weight: 800;
  margin-top: 51%;
  margin-left: 10%;
  text-transform: uppercase;
  z-index: 9999;
  position: absolute;
`;

export const TitleSecondary = styled.Text`
  font-size: 12px;
  position: absolute;
  color: #000;
  font-weight: 800;
  margin-top: 85%;
  margin-left: 10%;
  text-transform: uppercase;
`;

export const FilterView = styled.View`
  flex: 1;
  margin-top: 52%;
  height: 500px;
  position: absolute;
`;

export const ListAreaView = styled.ScrollView`
  margin-top: 104%; 
  position: absolute;
  height: 30%;
  z-index: 999;
`;



export const FilterFlatList = styled.FlatList`
  min-height: 50%;
`;

export const SearchView = styled.View`
  width: 100%;
  position: absolute;
  margin-top: 89%;
  margin-bottom: 10%;
  padding: 2%;
`;

