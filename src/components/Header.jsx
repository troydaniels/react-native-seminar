import React from 'react';
import { Text, View } from 'react-native';
import appStore from '../stores/AppStore';
import {heartIcon} from 'react-native-vector-icons/AntDesign';

const Header = _ => {  
    const {score, lives} = appStore;
    return(
        <View>
            <Text>
                Scores: {score}
            </Text>
            {/* <Heart/> */}
        </View>
    )
};

export default Header;
