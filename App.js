import React from 'react';
import { autorun } from 'mobx';
import { observer } from 'mobx-react';
import { View, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import Header from './src/components/Header';
import appStore from './src/stores/AppStore';
import AppStyle from './src/styles/AppStyle';

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
                this.setState({ uri, options });
            }
        });
    }

    componentWillUnmount() {
        this.disposer && this.disposer();
    }

    render() {
        const { uri, options } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Header />
                <View style={AppStyle.photoButtonContainer}>
                    {uri && (
                        <WebView
                            source={{ uri }}
                            height={600}
                            width={400}
                            style={AppStyle.imageStyle}
                        />
                    )}
                </View>
            </SafeAreaView>
        );
    }
}

export default App;
