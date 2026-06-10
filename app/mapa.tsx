import { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Alert,
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
  const [alertas, setAlertas] = useState<
    AlertaMapa[]
  >([]);

  const [loading, setLoading] =
    useState(false);

  const [region, setRegion] = useState({
    latitude: -22.9,
    longitude: -47.06,
    latitudeDelta: 5,
    longitudeDelta: 5,
  });

  useEffect(() => {
    carregarDados();

    const interval = setInterval(() => {
      carregarDados();
    }, 10000);

    return () =>
      clearInterval(interval);
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
          const regiao =
            regioesRes.data.find(
              (r: any) =>
                r.id === alerta.regiaoId
            );

          const historico =
            historicoRes.data.find(
              (h: any) =>
                h.regiaoId ===
                alerta.regiaoId
            );

          return {
            id: alerta.id,
            dsNivel:
              alerta.dsNivel,
            regiaoNome:
              alerta.regiaoNome,
            dataEmissao:
              alerta.dataEmissao,
            latitude:
              regiao?.reLatitude,
            longitude:
              regiao?.reLongitude,
            score:
              historico?.score ??
              0,
          };
        })
        .filter(
          (item: AlertaMapa) =>
            item.latitude !==
              undefined &&
            item.longitude !==
              undefined
        );

      setAlertas(dados);

      if (dados.length > 0) {
        const ultimo =
          dados[dados.length - 1];

        setRegion({
          latitude:
            ultimo.latitude,
          longitude:
            ultimo.longitude,
          latitudeDelta: 1.5,
          longitudeDelta: 1.5,
        });
      }
    } catch (error) {
      console.log(error);

      Alert.alert(
        "Erro",
        "Falha ao carregar alertas."
      );
    } finally {
      setLoading(false);
    }
  }

  function corMarker(
    nivel: string
  ) {
    switch (
      nivel?.toUpperCase()
    ) {
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
        region={region}
      >
        {alertas.map(
          (alerta) => (
            <Marker
              key={alerta.id}
              coordinate={{
                latitude:
                  alerta.latitude,
                longitude:
                  alerta.longitude,
              }}
              title={
                alerta.regiaoNome
              }
              description={`Nível: ${alerta.dsNivel}`}
              pinColor={corMarker(
                alerta.dsNivel
              )}
              onPress={() =>
                abrirDetalhes(
                  alerta
                )
              }
            />
          )
        )}
      </MapView>

      <View style={styles.infoCard}>
        <Text
          style={
            styles.infoTitle
          }
        >
          🚨 Alertas Ativos
        </Text>

        {loading ? (
          <ActivityIndicator
            size="small"
            color="#D32F2F"
          />
        ) : (
          <Text
            style={
              styles.infoValue
            }
          >
            {alertas.length}
          </Text>
        )}
      </View>

      <View
        style={
          styles.menuContainer
        }
      >
        <TouchableOpacity
          style={
            styles.menuCard
          }
          onPress={() =>
            router.push(
              "/perfil"
            )
          }
        >
          <Text
            style={
              styles.menuIcon
            }
          >
            👤
          </Text>

          <Text
            style={
              styles.menuText
            }
          >
            Perfil
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            styles.menuCard
          }
          onPress={() =>
            router.push(
              "/regioes"
            )
          }
        >
          <Text
            style={
              styles.menuIcon
            }
          >
            🌎
          </Text>

          <Text
            style={
              styles.menuText
            }
          >
            Regiões
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            styles.menuCard
          }
          onPress={() =>
            router.push(
              "/focos"
            )
          }
        >
          <Text
            style={
              styles.menuIcon
            }
          >
            🔥
          </Text>

          <Text
            style={
              styles.menuText
            }
          >
            Focos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            styles.menuCard
          }
          onPress={
            carregarDados
          }
        >
          <Text
            style={
              styles.menuIcon
            }
          >
            🔄
          </Text>

          <Text
            style={
              styles.menuText
            }
          >
            Atualizar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}