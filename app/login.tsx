import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
  ActivityIndicator,
} from "react-native";

import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { authApi } from "../src/services/authApi";
import { loginStyles as styles } from "../src/styles/login.styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    verificarLogin();
  }, []);

  async function verificarLogin() {
    try {
      const token =
        await AsyncStorage.getItem("token");

      if (token) {
        router.replace("/mapa");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function realizarLogin() {
    if (!email.trim() || !senha.trim()) {
      Alert.alert(
        "Erro",
        "Preencha todos os campos."
      );
      return;
    }

    try {
      setLoading(true);

      const payload = {
        email: email.trim(),
        senha,
        fcmToken: "",
      };

      console.log("=== LOGIN ===");
      console.log(payload);

      const response =
        await authApi.post(
          "/api/auth/login",
          payload
        );

      console.log(response.data);

      const token =
        response.data?.idToken ||
        response.data?.token;

      if (!token) {
        Alert.alert(
          "Erro",
          "A API não retornou um token."
        );
        return;
      }

      await AsyncStorage.multiSet([
        ["token", token],
        [
          "nome",
          response.data?.nome || "",
        ],
        [
          "email",
          response.data?.email || "",
        ],
        [
          "uid",
          response.data?.uid || "",
        ],
      ]);

      Alert.alert(
        "Sucesso",
        "Login realizado com sucesso!"
      );

      router.replace("/mapa");
    } catch (error: any) {
      console.log("ERRO LOGIN");
      console.log(error);

      if (error?.response) {
        Alert.alert(
          `Erro ${error.response.status}`,
          error.response?.data?.detail ||
            "Falha ao realizar login."
        );
      } else {
        Alert.alert(
          "Erro de conexão",
          "Não foi possível conectar com a API."
        );
      }
    } finally {
      setLoading(false);
    }
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
            S.E.N.T.I.N.E.L.A
          </Text>

          <Text style={styles.subtitle}>
            Sistema Inteligente de
            Monitoramento Ambiental
          </Text>

          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#999"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            placeholder="Senha"
            placeholderTextColor="#999"
            style={styles.input}
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity
            style={[
              styles.button,
              loading && {
                opacity: 0.7,
              },
            ]}
            disabled={loading}
            onPress={realizarLogin}
          >
            {loading ? (
              <ActivityIndicator
                color="#FFF"
              />
            ) : (
              <Text style={styles.buttonText}>
                ENTRAR
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              router.push("/cadastro")
            }
          >
            <Text style={styles.link}>
              Criar conta
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
