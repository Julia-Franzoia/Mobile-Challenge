import React from 'react';
import styled from 'styled-components/native';
import Foto from '../../assets/images/foto.svg';



export const Container = styled.SafeAreaView`
  background-color: #1441f7;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: 20px;
  width: 100%;
  text-align: center;
  color: #fff;
  font-weight: 800;
  position: absolute;
  text-transform: uppercase;
  z-index: 9999;
`;
export const Email = styled.Text`
  font-size: 15px;
  width: 100%;
  margin-top: 10%;
  text-align: center;
  color: #fff;
  font-weight: 400;
  z-index: 9999;
`;


