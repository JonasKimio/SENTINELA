import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import { api } from "../src/services/api";
import styles from "../src/styles/focos.styles";

export default function Focos() {
  const [focos, setFocos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarFocos();
  }, []);

  async function carregarFocos() {
    try {
      const response =
        await api.get("/api/focos");

      setFocos(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
    <FlatList
      data={focos}
      keyExtractor={(item, index) =>
        index.toString()
      }
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={carregarFocos}
        />
      }
      contentContainerStyle={
        styles.container
      }
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>
            🔥 Foco de Calor
          </Text>

          <Text style={styles.label}>
            Satélite:
          </Text>

          <Text style={styles.value}>
            {item.satelite}
          </Text>

          <Text style={styles.label}>
            Região:
          </Text>

          <Text style={styles.value}>
            {item.regiaoNome}
          </Text>

          <Text style={styles.label}>
            Brightness:
          </Text>

          <Text style={styles.value}>
            {item.brightness}
          </Text>

          <Text style={styles.label}>
            Confidence:
          </Text>

          <Text style={styles.value}>
            {item.confidence}
          </Text>

          <Text style={styles.label}>
            FRP:
          </Text>

          <Text style={styles.value}>
            {item.frp}
          </Text>

          <Text style={styles.label}>
            Data:
          </Text>

          <Text style={styles.value}>
            {new Date(
              item.dataCaptura
            ).toLocaleString("pt-BR")}
          </Text>
        </View>
      )}
    />
  );
}