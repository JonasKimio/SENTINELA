import { useState } from "react";

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { router } from "expo-router";

import { api } from "../src/services/api";

import { simularLeituraIoT }
from "../src/services/iotApi";

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

  async function enviarIoT(
    lat: number,
    lng: number
  ) {
    try {
      const token =
        await AsyncStorage.getItem(
          "token"
        );

      const payload = {
        latitude: lat,
        longitude: lng,

        temperatura:
          Math.random() * 25 + 20,

        umidade:
          Math.random() * 80 + 10,

        co2:
          Math.random() * 1700 +
          300,

        fumaca:
          Math.random() * 100,

        vento:
          Math.random() * 23 + 6,

        chuva:
          Math.random() > 0.7
            ? Math.random() * 5
            : 0,

        raioKm: 100,
      };

      const response = await fetch(
        "https://app-sentinela-api-rm560475-htg5bnafe9akdadr.francecentral-01.azurewebsites.net/api/iot/sensor",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(
            payload
          ),
        }
      );

      console.log(
        "IoT enviado:",
        payload
      );

      return response.ok;
    } catch (error) {
      console.log(
        "Erro IoT:",
        error
      );

      return false;
    }
  }

  async function salvar() {
    try {
      const lat =
        parseFloat(latitude);

      const lng =
        parseFloat(longitude);

      await api.post("/api/regioes", {
  nmRegiao,
  nmEstado,
  nmPais,
  reLatitude: Number(latitude),
  reLongitude: Number(longitude),
});

await simularLeituraIoT(
  Number(latitude),
  Number(longitude)
);

Alert.alert(
  "Sucesso",
  "Região cadastrada e análise iniciada."
);

      router.replace("/regioes");
    } catch (error) {
      console.log(error);

      Alert.alert(
        "Erro",
        "Falha ao cadastrar região."
      );
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome da Região"
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
        keyboardType="numeric"
        onChangeText={setLatitude}
      />

      <TextInput
        placeholder="Longitude"
        style={styles.input}
        value={longitude}
        keyboardType="numeric"
        onChangeText={setLongitude}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={salvar}
      >
        <Text style={styles.buttonText}>
          Salvar Região
        </Text>
      </TouchableOpacity>
    </View>
  );
}