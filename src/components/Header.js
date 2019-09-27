import React from "react";
import { Text, View } from "react-native";
import { observer } from "mobx-react";
import { autorun } from "mobx";
import { Rating } from "react-native-ratings";
import appStore from "../stores/AppStore";
import HeaderStyle from "../styles/HeaderStyle";

@observer
class Header extends React.Component {
  componentDidMount() {
    this.disposer = autorun(() => {
      if (appStore.lives === 0) {
        appStore.setGameOver();
      } else if (appStore.lives > 0 && appStore.score >= 0) {
        appStore.getNewQuestion();
      }
    });
  }

  componentWillUnmount() {
    this.disposer && this.disposer();
  }

  render() {
    const { score, lives } = appStore;
    return (
      <View style={HeaderStyle.container}>
        <Text>Score: {score}</Text>
        <Rating type="heart" ratingCount={lives} readonly startingValue={3} />
      </View>
    );
  }
}

export default Header;
