import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
flex: 1;
padding-top: ${30 + getStatusBarHeight(true)}px;
`

export const Input = styled.TextInput`
padding: 10px;
border: 1px solid #ccc;
margin: 0 20px 10px;
font-size: 14px;
font-weight: bold;
color: #333;
`;

export const Btns = styled.View`
flex-direction: row;
justify-content: center;
margin: 15px;
`

export const BtnAddFilter = styled.TouchableOpacity`
flex: 1;
background: #54448c;
justify-content: center;
border-radius: 4px;
padding: 20px;
margin: 0 5px;
`;

export const TextAddFilter = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const BtnBack = styled.TouchableOpacity`
flex: 1;
background: #ccc;
justify-content: center;
border-radius: 4px;
padding: 20px;
margin: 0 5px;
`;

export const TextBack = styled.Text`
  font-size: 14px;
  color: #54448c;
  font-weight: bold;
  text-align: center;
`;
