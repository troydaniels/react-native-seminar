import React from "react";
import { observer } from "mobx-react/dist/mobx-react";
import PropTypes from "prop-types";
import { View, Button } from "react-native";
import appStore from "../stores/AppStore";

@observer
class Options extends React.Component {
  render() {
    const { options } = appStore.question;
    const { verifyAnswer } = this.props;

    const handleOnPress = option => {
      verifyAnswer(option);
    };

    return (
      <View>
        <Button title={options[0]} onPress={() => handleOnPress(options[0])} />
        <Button title={options[1]} onPress={() => handleOnPress(options[1])} />
        <Button title={options[2]} onPress={() => handleOnPress(options[2])} />
        <Button title={options[3]} onPress={() => handleOnPress(options[3])} />
      </View>
    );
  }
}

export default Options;

Options.propTypes = {
  verifyAnswer: PropTypes.objectOf.isRequired
};
