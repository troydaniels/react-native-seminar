import React from 'react';
import { observer } from 'mobx-react';

import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Header from './src/components/Header'

@observer
class App extends React.Component{
  render(){
    return(
    <SafeAreaView>
        <Header/>
    </SafeAreaView>
    )
  }
}

export default App;
