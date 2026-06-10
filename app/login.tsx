import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { authApi } from "../src/services/authApi";
import { registerForPushNotifications } from "../src/services/notifications";

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

      const fcmToken =
        await registerForPushNotifications();

      const payload = {
        email: email.trim(),
        senha,
        fcmToken: fcmToken || "",
      };

      console.log("PAYLOAD LOGIN");
      console.log(payload);

      const response =
        await authApi.post(
          "/api/auth/login",
          payload
        );

      console.log(
        "LOGIN RESPONSE:"
      );

      console.log(
        JSON.stringify(
          response.data,
          null,
          2
        )
      );

      const token =
        response.data?.idToken ||
        response.data?.token;

      console.log(
        "TOKEN RECEBIDO:"
      );

      console.log(token);

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

      const tokenSalvo =
        await AsyncStorage.getItem(
          "token"
        );

      console.log(
        "TOKEN SALVO:"
      );

      console.log(tokenSalvo);

      Alert.alert(
        "Sucesso",
        "Login realizado com sucesso!"
      );

      router.replace("/mapa");
    } catch (error: any) {
      console.log(
        "ERRO LOGIN"
      );

      console.log(error);

      console.log(
        error?.response?.data
      );

      Alert.alert(
        "Erro",
        error?.response?.data?.detail ||
          error?.response?.data?.message ||
          "Falha ao realizar login."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
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
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          style={styles.button}
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
  );
}