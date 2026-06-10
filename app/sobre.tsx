import {
  View,
  Text,
  ScrollView,
} from "react-native";

import styles from "../src/styles/sobre.styles";

export default function Sobre() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>
        S.E.N.T.I.N.E.L.A
      </Text>

      <Text style={styles.subtitle}>
        Sistema Inteligente de
        Monitoramento Ambiental
      </Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          📖 Sobre o Projeto
        </Text>

        <Text style={styles.text}>
          O S.E.N.T.I.N.E.L.A é uma
          plataforma desenvolvida para
          monitoramento de incêndios,
          focos de calor e riscos
          ambientais em tempo real.
        </Text>

        <Text style={styles.text}>
          O sistema integra dados de
          alertas, regiões monitoradas
          e focos detectados por
          satélites para auxiliar na
          prevenção e tomada de decisão.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          🎯 Objetivo
        </Text>

        <Text style={styles.text}>
          Auxiliar órgãos públicos,
          empresas e cidadãos no
          acompanhamento de riscos
          ambientais através de uma
          solução digital moderna e
          acessível.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          🛠 Tecnologias Utilizadas
        </Text>

        <Text style={styles.text}>
          • React Native
        </Text>

        <Text style={styles.text}>
          • Expo
        </Text>

        <Text style={styles.text}>
          • Firebase Authentication
        </Text>

        <Text style={styles.text}>
          • Firebase Cloud Messaging
        </Text>

        <Text style={styles.text}>
          • REST API
        </Text>

        <Text style={styles.text}>
          • NASA FIRMS
        </Text>

        <Text style={styles.text}>
          • Google Maps
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          👨‍💻 Equipe
        </Text>

        <Text style={styles.text}>
          • Jonas Kimio Isiki | 560560
        </Text>

        <Text style={styles.text}>
          • Daniel Kendi Saijo Araki | 553043
        </Text>

        <Text style={styles.text}>
          • Marcos Vinicius Alves Marques | 560475
        </Text>

        <Text style={styles.text}>
          • Lucas da Ressurreição Barbosa | 560179
        </Text>
      </View>

      <Text style={styles.footer}>
        Global Solution 2026
      </Text>
    </ScrollView>
  );
}