import React from "react";
import { Text } from "react-native";
import styled from 'styled-components/native'
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import commonStyles from '../../commonStyles'
import { Button } from 'react-native-paper'

export default ({ IconName,
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  password, 
  styleView, 
  styleInput,
  onPress
}) => {
  return (
    <InputArea style={styleView}>
      <Input
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        style={styleInput}
        multiline
      />
      {IconName && <Button onPress={onPress}>
        <IconMaterial name={IconName} size={25} color={commonStyles.colors.textButtons} />
      </Button>}
    </InputArea>
  );
};

const InputArea = styled.View`
    width:100%;
    max-width: 100%;
    flex-direction:row;
    justify-content: center;
    align-items: center;

`;

const Input = styled.TextInput`
max-width: 90%;
margin-left:8;
margin-right:5;
justify-content: center;
align-items: center;
`;