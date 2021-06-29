import React from "react";
import { Text } from "react-native";
import styled from 'styled-components/native'
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import commonStyles from '../../commonStyles'
const InputArea = styled.View`
    width:90%;
    height:60px;
    background-color: transparent;
    flex-direction:row;
    padding-left:15px;
    align-items:center;
    margin-bottom:15px;
    border: 2px;
    border-color: #fff

`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${props => props.colorInput || '#FFF'};
  margin-left:10px;
`;



export default ({ IconName, placeholder, value, onChangeText, password,borderColor }) => {
  return (
    <InputArea colorInput={commonStyles.colors.primary} style={{borderColor:borderColor}}>
      {IconName && <IconMaterial name={IconName} size={25} color={commonStyles.colors.textButtons} />}
      <Input
        colorInput={borderColor || commonStyles.colors.primary}
        placeholder={placeholder}
        placeholderTextColor={borderColor ?'rgba(255,255,255,0.5)': '#fff' }
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        style={{color: borderColor ? 'rgba(255,255,255,0.5)': '#fff' }}
      />
    </InputArea>
  );
};
