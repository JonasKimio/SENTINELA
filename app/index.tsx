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
          <Text style={styles.title}>
            S.E.N.T.I.N.E.L.A
          </Text>

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
        <Text style={styles.sectionTitle}>
          Sobre o Projeto
        </Text>

        <Text style={styles.description}>
          Sistema Inteligente para
          Notificação e Monitoramento
          de Incêndios utilizando dados
          de satélites, IA, IoT e
          notificações em tempo real.
        </Text>
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