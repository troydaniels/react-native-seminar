import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'

class App extends React.Component{
  static navigationOptions = ({ navigation }) => {
    const headerLeft = <Header/>;
  };

  render(){
    return(
    <View>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
    )
  }
}

export default App;
