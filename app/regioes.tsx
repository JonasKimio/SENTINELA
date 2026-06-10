import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  RefreshControl,
} from "react-native";

import { router } from "expo-router";

import { api } from "../src/services/api";
import { Regiao } from "../src/types/Regiao";

import { styles } from "../src/styles/regioes.styles";

export default function Regioes() {
  const [regioes, setRegioes] = useState<
    Regiao[]
  >([]);

  const [refreshing, setRefreshing] =
    useState(false);

  useEffect(() => {
    carregarRegioes();
  }, []);

  async function carregarRegioes() {
    try {
      const response = await api.get(
        "/api/regioes"
      );

      setRegioes(response.data);
    } catch (error) {
      console.log(error);

      Alert.alert(
        "Erro",
        "Falha ao carregar regiões."
      );
    }
  }

  async function atualizar() {
    setRefreshing(true);

    await carregarRegioes();

    setRefreshing(false);
  }

  async function excluir(id: number) {
    Alert.alert(
      "Excluir Região",
      "Deseja realmente excluir esta região?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            try {
              await api.delete(
                `/api/regioes/${id}`
              );

              carregarRegioes();
            } catch {
              Alert.alert(
                "Erro",
                "Não foi possível excluir."
              );
            }
          },
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          router.push("/nova-regiao")
        }
      >
        <Text style={styles.addButtonText}>
          ➕ Nova Região
        </Text>
      </TouchableOpacity>

      <FlatList
        data={regioes}
        keyExtractor={(item) =>
          item.id.toString()
        }
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={atualizar}
          />
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>
              {item.nmRegiao}
            </Text>

            <Text>
              {item.nmEstado} -{" "}
              {item.nmPais}
            </Text>

            <Text>
              📍 {item.reLatitude},{" "}
              {item.reLongitude}
            </Text>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() =>
                excluir(item.id)
              }
            >
              <Text style={styles.deleteText}>
                Excluir
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}