import React from 'react';
import { Text, View } from 'react-native';
import appStore from '../stores/AppStore';
import { observer } from 'mobx-react';
import { Rating } from 'react-native-ratings';
import HeaderStyle from '../styles/HeaderStyle';


const Header = observer(_ => {
    const {score, lives} = appStore;
    return(
        <View style={HeaderStyle.container}>
            <Text>Score: {score}</Text>
            <Rating type='heart' ratingCount={3} readonly startingValue={lives}/>
        </View>
    )
});

export default Header;
