import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#555",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },

  card: {
    width: "100%",
    backgroundColor: "#0B0B0F",
    borderRadius: 30,
    padding: 25,
    alignItems: "center",
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#D32F2F",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  avatarText: {
    color: "#FFF",
    fontSize: 40,
    fontWeight: "bold",
  },

  title: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  nome: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
  },

  email: {
    color: "#CFCFCF",
    marginTop: 8,
    fontSize: 16,
  },

  uid: {
    color: "#888",
    marginTop: 8,
    fontSize: 12,
    textAlign: "center",
    marginBottom: 20,
  },

  infoCard: {
    width: "100%",
    backgroundColor: "#222",
    padding: 18,
    borderRadius: 15,
    marginBottom: 20,
  },

  infoTitle: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },

  infoText: {
    color: "#DDD",
    fontSize: 15,
    lineHeight: 22,
  },

  button: {
    width: "100%",
    backgroundColor: "#E02929",
    padding: 18,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 12,
  },

  logoutButton: {
    width: "100%",
    backgroundColor: "#4A4A4A",
    padding: 18,
    borderRadius: 14,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});