import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 15,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },

  card: {
    backgroundColor: "#1B1B1B",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },

  title: {
    color: "#D32F2F",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  label: {
    color: "#AAA",
    marginTop: 5,
  },

  value: {
    color: "#FFF",
    fontSize: 15,
  },
});