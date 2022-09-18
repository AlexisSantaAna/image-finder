import { StyleSheet } from "react-native";
import { colors } from "./constants/colors";

export const styles = StyleSheet.create({
  containerLoader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: colors.text,
  },
});
