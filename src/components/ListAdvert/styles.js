import styled from 'styled-components/native';

export const List = styled.FlatList.attrs({
    contentContainerStyle: { paddingHorizontal: 20 },
    showVerticalScrollIndicator: false,
  })`
  margin-top: 10px;
`;

export const Link = styled.TouchableOpacity`
border-radius: 4px;
padding: 10px;
`

export const Item = styled.View`
margin-bottom: 10px;
`;

export const Title = styled.Text`
font-size: 14px;
font-weight: bold;
color: #fff;
`;

export const TextLink = styled.Text`
flex: 1;
font-size: 12px;
color: #fff;
text-align: right;
`;

export const Subtitle = styled.View`
margin-top: 10px;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const Price = styled.Text`
font-size: 12px;
color: #fff;
`;
