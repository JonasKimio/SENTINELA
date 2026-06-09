import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.65)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "rgba(20,20,20,0.95)",
    borderRadius: 25,
    padding: 25,
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#D32F2F",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  avatarText: {
    color: "#FFF",
    fontSize: 38,
    fontWeight: "bold",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 15,
  },

  nome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
  },

  email: {
    color: "#BBB",
    marginTop: 5,
  },

  uid: {
    color: "#888",
    fontSize: 12,
    marginTop: 8,
    marginBottom: 15,
  },

  infoCard: {
    width: "100%",
    backgroundColor: "#262626",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    marginTop: 10,
  },

  infoTitle: {
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 5,
  },

  infoText: {
    color: "#CCC",
    lineHeight: 20,
  },

  button: {
    width: "100%",
    backgroundColor: "#D32F2F",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },

  logoutButton: {
    width: "100%",
    backgroundColor: "#444",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});