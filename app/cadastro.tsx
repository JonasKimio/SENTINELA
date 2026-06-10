import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

import { router } from "expo-router";

import { authApi } from "../src/services/authApi";
import { registerForPushNotifications } from "../src/services/notifications";

import { cadastroStyles as styles } from "../src/styles/cadastro.styles";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function cadastrar() {
    if (
      !nome ||
      !email ||
      !senha ||
      !confirmarSenha
    ) {
      Alert.alert(
        "Erro",
        "Preencha todos os campos."
      );
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert(
        "Erro",
        "As senhas não coincidem."
      );
      return;
    }

    try {
      setLoading(true);

      const fcmToken =
        await registerForPushNotifications();

      await authApi.post(
        "/api/auth/register",
        {
          nome,
          email,
          senha,
          fcmToken: fcmToken || "",
          raioKm: 20,
        }
      );

      Alert.alert(
        "Sucesso",
        "Cadastro realizado."
      );

      router.replace("/login");
    } catch (error: any) {
      Alert.alert(
        "Erro",
        error?.response?.data?.detail ||
          "Falha ao cadastrar."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          Criar Conta
        </Text>

        <TextInput
          placeholder="Nome"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          placeholder="E-mail"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
        />

        <TextInput
          placeholder="Confirmar Senha"
          secureTextEntry
          style={styles.input}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={cadastrar}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>
              CADASTRAR
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}