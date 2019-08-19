import styled from 'styled-components/native';

export const List = styled.FlatList.attrs({
    showVerticalScrollIndicator: false,
  })`
  margin-bottom: 1px;
`;

export const Link = styled.TouchableOpacity`
border-radius: 4px;
padding: 20px;
`

export const Item = styled.View`
margin-bottom: 1px;
`;

export const Title = styled.Text`
font-size: 14px;
font-weight: bold;
color: #fff;
margin: 10px 0;
`;

export const TextLink = styled.Text`
flex: 1;
font-size: 12px;
color: #fff;
text-align: right;
`;

export const Subtitle = styled.View`
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const Price = styled.Text`
font-size: 12px;
color: #fff;
`;
