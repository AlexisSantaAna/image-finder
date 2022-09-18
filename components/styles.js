import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 100,
    backgroundColor: colors.primary,
  },
  input: {
    paddingVertical: 2,
    width: "60%",
    borderRadius: 10,
    paddingLeft: 8    
  },
  title: {
    fontSize: 24,
    color: colors.text,
    marginVertical: 20,
    fontFamily: "Poppins-Bold",
    color: colors.text
  },
});
