import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 55,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 120,
    backgroundColor: colors.primary,
  },
  input: {
    paddingVertical: 4,
    width: "60%",
    borderRadius: 10,
    paddingLeft: 10    
  },
  title: {
    fontSize: 28,
    color: colors.text,
    marginVertical: 8,
    fontFamily: "Poppins-Bold",
    color: colors.text
  },
  inputText: {
    fontSize: 16
  },
  containerLoader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
