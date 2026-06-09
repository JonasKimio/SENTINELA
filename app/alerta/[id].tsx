import { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { api } from "../../src/services/api";
import styles from "../../src/styles/alerta.styles";

export default function AlertaDetalhe() {
  const { id } = useLocalSearchParams();

  const [alerta, setAlerta] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarAlerta();
  }, []);

  async function carregarAlerta() {
    try {
      const [
        alertasRes,
        regioesRes,
        historicoRes,
      ] = await Promise.all([
        api.get("/api/alertas"),
        api.get("/api/regioes"),
        api.get("/api/historico-risco"),
      ]);

      const alertaEncontrado =
        alertasRes.data.find(
          (item: any) =>
            item.id.toString() === id
        );

      if (!alertaEncontrado) {
        setAlerta(null);
        return;
      }

      const regiao =
        regioesRes.data.find(
          (r: any) =>
            r.id === alertaEncontrado.regiaoId
        );

      const historico =
        historicoRes.data.find(
          (h: any) =>
            h.regiaoId === alertaEncontrado.regiaoId
        );

      setAlerta({
        ...alertaEncontrado,
        score: historico?.score ?? 0,
        estado: regiao?.nmEstado ?? "-",
        pais: regiao?.nmPais ?? "-",
        latitude: regiao?.reLatitude,
        longitude: regiao?.reLongitude,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function corNivel(nivel: string) {
    switch (nivel?.toUpperCase()) {
      case "ALTO":
        return "#D32F2F";

      case "MEDIO":
        return "#FF9800";

      case "BAIXO":
        return "#4CAF50";

      default:
        return "#2196F3";
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

  if (!alerta) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>
          Alerta não encontrado
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={
        styles.content
      }
    >
      <View style={styles.card}>
        <Text style={styles.title}>
          🚨 Alerta #{alerta.id}
        </Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}>
            Região
          </Text>
          <Text style={styles.value}>
            {alerta.regiaoNome}
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>
            Estado
          </Text>
          <Text style={styles.value}>
            {alerta.estado}
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>
            País
          </Text>
          <Text style={styles.value}>
            {alerta.pais}
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>
            Nível de Risco
          </Text>

          <Text
            style={[
              styles.nivel,
              {
                color: corNivel(
                  alerta.dsNivel
                ),
              },
            ]}
          >
            {alerta.dsNivel}
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>
            Score de Risco
          </Text>

          <Text style={styles.value}>
            {alerta.score}
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>
            Mensagem
          </Text>

          <Text style={styles.value}>
            {alerta.dsMensagem}
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>
            Data/Hora
          </Text>

          <Text style={styles.value}>
            {new Date(
              alerta.dataEmissao
            ).toLocaleString("pt-BR")}
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>
            Notificado
          </Text>

          <Text style={styles.value}>
            {alerta.flNotificado}
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>
            Latitude
          </Text>

          <Text style={styles.value}>
            {alerta.latitude}
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>
            Longitude
          </Text>

          <Text style={styles.value}>
            {alerta.longitude}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}