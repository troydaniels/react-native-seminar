import React from "react";
import { autorun } from "mobx";
import { observer } from "mobx-react";
import { View, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import Header from "./src/components/Header";
import appStore from "./src/stores/AppStore";
import AppStyle from "./src/styles/AppStyle";
import Options from "./src/components/Options";

@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: undefined
    };
  }

  componentWillMount() {
    appStore.getNewQuestion();

    this.disposer = autorun(() => {
      const { question } = appStore;
      if (question) {
        const { uri } = question;
        this.setState({ uri });
      }
    });
  }

  componentWillUnmount() {
    this.disposer && this.disposer();
  }

  verifyAnswer = selection => {
    appStore.verifyAnswer(selection);
  };

  render() {
    const { uri } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <View style={AppStyle.photoButtonContainer}>
          {uri && (
            <>
              <WebView
                source={{ uri }}
                height={400}
                width={400}
                style={AppStyle.imageStyle}
              />
              <Options verifyAnswer={this.verifyAnswer} />
            </>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
