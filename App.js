import React from 'react';
import { observer } from 'mobx-react';
import { View, Image, SafeAreaView} from 'react-native';
import Header from './src/components/Header';
import appStore from './src/stores/AppStore';
import AppStyle from './src/styles/AppStyle';

@observer
class App extends React.Component{
  render(){
    const {imageURL} = appStore;
    return(
    <SafeAreaView style={{flex: 1}}>
        <Header/>
        <View style={AppStyle.photoButtonContainer}>
          <Image source={{uri: imageURL}} style={AppStyle.imageStyle} resizeMode={'contain'}/>
        </View>
    </SafeAreaView>
    )
  }
}

export default App;
