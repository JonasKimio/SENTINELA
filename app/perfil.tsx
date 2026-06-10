import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

import styles from "../src/styles/perfil.styles";

export default function Perfil() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarDados();
  }, []);

  async function carregarDados() {
    try {
      const nomeStorage =
        await AsyncStorage.getItem("nome");

      const emailStorage =
        await AsyncStorage.getItem("email");

      const uidStorage =
        await AsyncStorage.getItem("uid");

      setNome(nomeStorage || "Usuário");
      setEmail(emailStorage || "");
      setUid(uidStorage || "");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    await AsyncStorage.clear();
    router.replace("/login");
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="large"
          color="#D32F2F"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {nome.charAt(0).toUpperCase()}
          </Text>
        </View>

        <Text style={styles.title}>
          Meu Perfil
        </Text>

        <Text style={styles.nome}>
          {nome}
        </Text>

        <Text style={styles.email}>
          {email}
        </Text>

        {uid ? (
          <Text style={styles.uid}>
            UID: {uid}
          </Text>
        ) : null}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            Sistema S.E.N.T.I.N.E.L.A
          </Text>

          <Text style={styles.infoText}>
            Monitoramento de incêndios e focos
            de calor em tempo real.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            router.push("/configuracoes")
          }
        >
          <Text style={styles.buttonText}>
            ⚙ Configurações
          </Text>
        </TouchableOpacity>
          
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={logout}
        >
          <Text style={styles.buttonText}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}