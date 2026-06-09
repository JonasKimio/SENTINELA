import { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { router } from "expo-router";
import { api } from "../src/services/api";
import { mapaStyles as styles } from "../src/styles/mapa.styles";

type AlertaMapa = {
  id: number;
  dsNivel: string;
  regiaoNome: string;
  dataEmissao: string;
  latitude: number;
  longitude: number;
  score: number;
};

export default function Mapa() {
  const [alertas, setAlertas] = useState<AlertaMapa[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    carregarDados();
  }, []);

  async function carregarDados() {
    try {
      setLoading(true);

      const [
        alertasRes,
        regioesRes,
        historicoRes,
      ] = await Promise.all([
        api.get("/api/alertas"),
        api.get("/api/regioes"),
        api.get("/api/historico-risco"),
      ]);

      const dados = alertasRes.data
        .map((alerta: any) => {
          const regiao = regioesRes.data.find(
            (r: any) =>
              r.id === alerta.regiaoId
          );

          const historico =
            historicoRes.data.find(
              (h: any) =>
                h.regiaoId === alerta.regiaoId
            );

          return {
            id: alerta.id,
            dsNivel: alerta.dsNivel,
            regiaoNome: alerta.regiaoNome,
            dataEmissao: alerta.dataEmissao,
            latitude: regiao?.reLatitude,
            longitude: regiao?.reLongitude,
            score: historico?.score ?? 0,
          };
        })
        .filter(
          (item: AlertaMapa) =>
            item.latitude !== undefined &&
            item.longitude !== undefined
        );

      setAlertas(dados);
    } catch (error: any) {
      console.log("ERRO MAPA:");
      console.log(error);

      Alert.alert(
        "Erro",
        "Falha ao carregar alertas."
      );
    } finally {
      setLoading(false);
    }
  }

  function corMarker(nivel: string) {
    switch (nivel?.toUpperCase()) {
      case "ALTO":
        return "red";

      case "MEDIO":
        return "orange";

      case "BAIXO":
        return "green";

      default:
        return "blue";
    }
  }

  function abrirDetalhes(
    alerta: AlertaMapa
  ) {
    router.push(
      `/alerta/${alerta.id}`
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -22.9,
          longitude: -47.06,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
      >
        {alertas.map((alerta) => (
          <Marker
            key={alerta.id}
            coordinate={{
              latitude: alerta.latitude,
              longitude: alerta.longitude,
            }}
            title={alerta.regiaoNome}
            description={`Nível: ${alerta.dsNivel}`}
            pinColor={corMarker(
              alerta.dsNivel
            )}
            onPress={() =>
              abrirDetalhes(alerta)
            }
          />
        ))}
      </MapView>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>
          Alertas Ativos
        </Text>

        {loading ? (
          <ActivityIndicator
            size="small"
            color="#D32F2F"
          />
        ) : (
          <Text style={styles.infoValue}>
            {alertas.length}
          </Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.refreshButton}
        onPress={carregarDados}
      >
        <Text style={styles.buttonText}>
          Atualizar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.regionButton}
        onPress={() =>
          router.push("/regioes")
        }
      >
        <Text style={styles.buttonText}>
          Regiões
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.profileButton}
        onPress={() =>
          router.push("/perfil")
        }
      >
        <Text style={styles.buttonText}>
          Perfil
        </Text>
      </TouchableOpacity>
    </View>
  );
}