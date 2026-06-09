import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
  },

  content: {
    padding: 20,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#101010",
  },

  errorText: {
    color: "#FFF",
    fontSize: 18,
  },

  card: {
    backgroundColor: "#1B1B1B",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#D32F2F",
  },

  title: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },

  infoBox: {
    marginBottom: 18,
  },

  label: {
    color: "#999",
    fontSize: 14,
    marginBottom: 4,
  },

  value: {
    color: "#FFF",
    fontSize: 18,
  },

  nivel: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default styles;