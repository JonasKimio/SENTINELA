import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { router } from "expo-router";

import styles from "../src/styles/home.styles";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require("../src/assets/logo.jpg")}
        style={styles.banner}
      >
        <View style={styles.overlay}>
<Image
  source={require("../src/assets/Logo-SentinelaSemFundo.png")}
  style={{
    width: 250,
    height: 120,
    resizeMode: "contain",
    marginBottom: 20,
  }}
/>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              router.push("/login")
            }
          >
            <Text style={styles.buttonText}>
              Acessar
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.section}>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/sobre")}
      >
        <Text style={styles.buttonText}>
          Sobre o Projeto
        </Text>
      </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Parceiros
        </Text>

        <View style={styles.partners}>
          <Image
            source={require("../src/assets/visiona.png")}
            style={styles.logo}
          />

          <Image
            source={require("../src/assets/spaceterra.png")}
            style={styles.logo}
          />

          <Image
            source={require("../src/assets/bizu.png")}
            style={styles.logo}
          />

          <Image
            source={require("../src/assets/parceiro.png")}
            style={styles.logo}
          />
        </View>
      </View>
    </ScrollView>
  );
}