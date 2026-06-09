import { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";

import { router } from "expo-router";
import { api } from "../src/services/api";
import { styles } from "../src/styles/novaregiao.styles";

export default function NovaRegiao() {
  const [nmRegiao, setNmRegiao] =
    useState("");

  const [nmEstado, setNmEstado] =
    useState("");

  const [nmPais, setNmPais] =
    useState("Brasil");

  const [latitude, setLatitude] =
    useState("");

  const [longitude, setLongitude] =
    useState("");

  async function salvar() {
    try {
      await api.post("/api/regioes", {
        nmRegiao,
        nmEstado,
        nmPais,
        reLatitude: Number(latitude),
        reLongitude: Number(longitude),
      });

      Alert.alert(
        "Sucesso",
        "Região cadastrada"
      );

      router.back();
    } catch {
      Alert.alert(
        "Erro",
        "Falha ao cadastrar região"
      );
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Região"
        style={styles.input}
        value={nmRegiao}
        onChangeText={setNmRegiao}
      />

      <TextInput
        placeholder="Estado"
        style={styles.input}
        value={nmEstado}
        onChangeText={setNmEstado}
      />

      <TextInput
        placeholder="Latitude"
        style={styles.input}
        value={latitude}
        onChangeText={setLatitude}
      />

      <TextInput
        placeholder="Longitude"
        style={styles.input}
        value={longitude}
        onChangeText={setLongitude}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={salvar}
      >
        <Text style={styles.buttonText}>
          Salvar
        </Text>
      </TouchableOpacity>
    </View>
  );
}