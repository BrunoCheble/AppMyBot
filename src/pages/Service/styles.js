import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight(true)}px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #FFF;
  font-weight: bold;
  padding: 0 20px;
  text-align: left;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 0px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background: #FFF;
`;
export const Submit = styled.TouchableOpacity`
  background: #2793e6;
  margin-left: 10px;
  justify-content: center;
  border-radius: 4px;
  padding: 0 14px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showVerticalScrollIndicator: false,
})`
margin-top: 10px;
`;

export const Header = styled.View`
  background: #54448c;
  padding: 20px;
  text-align: center;
`;

export const Emails = styled.Text`
  font-size: 12px;
  color: #fff;
`;

export const Interval = styled.Text`
  font-size: 12px;
  color: #fff;
`;  
export const Date = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-bottom: 10px;
`;  

export const BtnBackModal = styled.TouchableOpacity`
background: #2793e6;
justify-content: center;
border-radius: 4px;
padding: 20px;
margin: 20px;
`;

export const TextBackModal = styled.Text`
  font-size: 14px;
  color: #fff;
  text-align: center;
`;

export const BtnAddFilter = styled.TouchableOpacity`
background: #fff;
justify-content: center;
border-radius: 4px;
padding: 20px;
margin: 20px;
`;

export const TextAddFilter = styled.Text`
  font-size: 14px;
  color: #54448c;
  font-weight: bold;
  text-align: center;
`;
