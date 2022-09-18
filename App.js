import { ActivityIndicator, View } from "react-native";
import { useFonts } from "expo-font";
import Header from "./components/Header";
import { styles } from "./styles";

export default function App() {
  const [loaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    <View style={styles.containerLoader}>
      <ActivityIndicator size="large" color="#000" />
    </View>;
  }

  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}
