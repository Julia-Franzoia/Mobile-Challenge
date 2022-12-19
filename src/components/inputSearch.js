import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
width: 100%;
height: 45px;
border-radius: 10px;
background-color: #C8C8C8;
flex-direction: row;
padding-left: 15px;
align-items: center;
margin-left: auto;
margin-right: auto;

`;
const Input = styled.TextInput`
flex: 1;
font-size: 16px;
color: #ABABAB;
margin-left: 10px;
font-style: italic;
`;

export default ({IconSvg, placeholder, value, onChangeText}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#ABABAB" />
            <Input 
                placeholder={placeholder}
                placeholderTextColor="#ABABAB"
                value={value}
                onChangeText={onChangeText}
            />
        </InputArea>
    );
}