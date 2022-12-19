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
  position: absolute;
  color: #000;
  height: 0px;
  font-weight: 800;
  margin-top: 55%;
  margin-left: 10%;
  text-transform: uppercase;
`;


export const ListAreaView = styled.ScrollView`
  margin-top: 65%; 
  position: absolute;
  height: 50%;
  z-index: 999;
`;



