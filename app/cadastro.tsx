import { useState } from "react";
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
import { authApi } from "../src/services/authApi";
import { cadastroStyles as styles } from "../src/styles/cadastro.styles";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] =
    useState("");
  const [loading, setLoading] = useState(false);

  async function cadastrar() {
    if (
      !nome ||
      !email ||
      !senha ||
      !confirmarSenha
    ) {
      Alert.alert(
        "Erro",
        "Preencha todos os campos"
      );
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert(
        "Erro",
        "As senhas não coincidem"
      );
      return;
    }

    try {
      setLoading(true);

      await authApi.post(
        "/api/auth/register",
        {
          nome,
          email,
          senha,
          fcmToken: "",
          raioKm: 20,
        }
      );

      Alert.alert(
        "Sucesso",
        "Cadastro realizado com sucesso!"
      );

      router.replace("/login");
    } catch (error: any) {
      Alert.alert(
        "Erro",
        error?.response?.data?.detail ||
          "Falha ao cadastrar"
      );
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
            Criar Conta
          </Text>

          <Text style={styles.subtitle}>
            Cadastre-se para receber alertas
            ambientais em tempo real
          </Text>

          <TextInput
            placeholder="Nome Completo"
            placeholderTextColor="#999"
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#999"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            placeholder="Senha"
            placeholderTextColor="#999"
            style={styles.input}
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <TextInput
            placeholder="Confirmar Senha"
            placeholderTextColor="#999"
            style={styles.input}
            secureTextEntry
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={cadastrar}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>
                CADASTRAR
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              router.replace("/login")
            }
          >
            <Text style={styles.link}>
              Já possui conta? Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}