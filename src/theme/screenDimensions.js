import { Dimensions } from "react-native";

export default screenDimensions = {
  screenHeight: Dimensions.get("screen").height,
  screenWidth: Dimensions.get("screen").width,
  windowHeight: Dimensions.get("window").height,
  windowWidth: Dimensions.get("window").width,
};
