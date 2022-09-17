import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import { colors } from "./constants/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.text
  },
});
