import React from 'react';
import { autorun, toJS } from 'mobx';
import { observer } from 'mobx-react';
import { View, SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import appStore from './src/stores/AppStore';
import AppStyle from './src/styles/AppStyle';
import {WebView} from "react-native-webview";

// To see all the requests in the chrome Dev tools in the network tab.
XMLHttpRequest = GLOBAL.originalXMLHttpRequest
    ? GLOBAL.originalXMLHttpRequest
    : GLOBAL.XMLHttpRequest;

// fetch logger
global._fetch = fetch;
global.fetch = function(uri, options, ...args) {
    return global._fetch(uri, options, ...args).then(response => {
        console.log('Fetch', { request: { uri, options, ...args }, response });
        return response;
    });
};

@observer
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uri: undefined,
            options: [],
        };
    }

    componentWillMount() {
        appStore.getNewQuestion();

        this.disposer = autorun(() => {
            const { question } = appStore;
            if (question) {
                const { uri, options } = question;
                    console.log('uri', toJS(uri))
                      this.setState({uri, options});
            }
        });
    }

    componentWillUnmount() {
        this.disposer && this.disposer();
    }

    render() {
        const { uri, options } = this.state;
        console.log('uri', uri);
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Header />
                <View style={AppStyle.photoButtonContainer}>
                    {uri && (
                    <WebView source={{uri: uri}} height={50} width={50}/>
                    )}
                </View>
            </SafeAreaView>
        );
    }
}

export default App;
