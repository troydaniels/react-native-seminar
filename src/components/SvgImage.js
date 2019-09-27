import React from "react";
import RNFetchBlob from "rn-fetch-blob";
import Svg, { Image } from "react-native-svg";

import { View } from "react-native";

class SvgImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: undefined
    };
    console.log("dsfjkbdsfkjbdsfkjbn");
  }

  async componentWillMount() {
    const res = await RNFetchBlob.config({
      // add this option that makes response data to be stored as a file,
      // this is much more performant.
      fileCache: true,
      // by adding this option, the temp files will have a file extension
      appendExt: "jpg"
    }).fetch("GET", "https://cdn.svgporn.com/logos/statuspage.svg");

    console.log("*", res);
    this.setState({
      uri: `file://${res.path()}`
    });
  }

  render() {
    const { uri } = this.state;
    console.log("uri", uri);

    return (
      <View>
        <Svg height="100" width="100" viewBox="0 0 100 100">
          <Image
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            href={!uri ? require("../assets/placeholder.jpg") : { uri }}
          />
        </Svg>
      </View>
    );
  }
}

export default SvgImage;
