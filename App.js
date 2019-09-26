import React from 'react';
import {observer} from 'mobx-react';
import { autorun, toJS } from 'mobx';
import {SafeAreaView, View, Image} from 'react-native';
import Header from './src/components/Header'
import appStore from './src/stores/AppStore';
import AppStyle from './src/styles/AppStyle';

@observer
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uri: null,
            options: [],
        };
    }

    componentWillMount() {
        console.log("here")
        appStore.getNewQuestion();

        this.disposer = autorun(() => {
            const {question} = appStore;
            if (question) {
                const {uri, options} = question;
                this.setState({uri, options});
            }
        })
    }

    componentWillUnmount() {
        this.disposer && this.disposer();
    }

    render() {
        const {uri, options} = this.state;
        console.log("uri", uri)
        return (
            <SafeAreaView style={{flex: 1}}>
                <Header/>
                <View style={AppStyle.photoButtonContainer}>
                    <Image source={{uri}} style={AppStyle.imageStyle} resizeMode={'contain'}/>
                </View>
            </SafeAreaView>
        )
    }
}

export default App;
