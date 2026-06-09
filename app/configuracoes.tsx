import { useEffect, useState } from "react";
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../src/styles/configuracoes.styles";

export default function Configuracoes() {
  const [push, setPush] = useState(true);

  useEffect(() => {
    carregarConfiguracoes();
  }, []);

  async function carregarConfiguracoes() {
    const valor =
      await AsyncStorage.getItem(
        "pushNotifications"
      );

    if (valor !== null) {
      setPush(JSON.parse(valor));
    }
  }

  async function alterarPush(
    valor: boolean
  ) {
    setPush(valor);

    await AsyncStorage.setItem(
      "pushNotifications",
      JSON.stringify(valor)
    );
  }

  async function limparDados() {
    Alert.alert(
      "Limpar Configurações",
      "Deseja restaurar as configurações padrão?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: async () => {
            await AsyncStorage.removeItem(
              "pushNotifications"
            );

            setPush(true);

            Alert.alert(
              "Sucesso",
              "Configurações restauradas."
            );
          },
        },
      ]
    );
  }

  return (
    <ImageBackground
      source={require("../src/assets/logo.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.card}>

          <Text style={styles.title}>
            Configurações
          </Text>

          <View style={styles.option}>
            <Text style={styles.optionText}>
              Notificações Push
            </Text>

            <Switch
              value={push}
              onValueChange={alterarPush}
            />
          </View>

          <Text style={styles.description}>
            Receber alertas de risco alto na
            sua região.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={limparDados}
          >
            <Text style={styles.buttonText}>
              Restaurar Configurações
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}