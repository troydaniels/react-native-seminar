import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import appStore from "../stores/AppStore";

class SvgImage extends React.Component {
    render() {
        return (
            <View>
                <WebView source={{uri: uri}} height={50} width={50}/>
            </View>
        );
    }
}

export default SvgImage;
