import { View } from "react-native";
import { useFonts } from "expo-font";
import Header from "./components/Header";
import { styles } from "./styles";
import Start from "./screens/Start";
import Images from "./screens/Images";
import { useState } from "react";
import Loader from "./components/Loader";

export default function App() {
  const [image, setImage] = useState(0);
  const [confirmed, setConfirmed] = useState(0);
  let url = `https://source.unsplash.com/350x450?${confirmed}`;

  const [loaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
  });

  if (!loaded) {
    return <Loader />;
  }

  let content = confirmed ? (
    <Images url={url} confirmed={confirmed} />
  ) : (
    <Start />
  );

  return (
    <View style={styles.container}>
      {/* Seteo la imagen por props y cuando existe imagen guardada lo muestro en componente Images */}
      <Header setImage={setImage} image={image} setConfirmed={setConfirmed} />
      {content}
    </View>
  );
}
