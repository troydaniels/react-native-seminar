import React from "react";
import { observer } from "mobx-react/dist/mobx-react";
import { View, Button } from "react-native";
import appStore from "../stores/AppStore";

@observer
class Options extends React.Component {
  render() {
    const { options } = appStore.question;
    return (
      <View>
        <Button title={options[0]} />
        <Button title={options[1]} />
        <Button title={options[2]} />
        <Button title={options[3]} />
      </View>
    );
  }
}

export default Options;
