import React, {useState, useContext} from 'react';

import {Container, ViewText, TitlePhraseText, AreaView} from './styles';

const InfoList = ({title, image}) => {
  return (
    <Container>
      <AreaView>
        {image}
        <ViewText>
          <TitlePhraseText style={{color: '#fff'}}>{title}</TitlePhraseText>
        </ViewText>
      </AreaView>
    </Container>
  );
};
export default InfoList;
