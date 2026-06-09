import { StyleSheet } from "react-native";

export const cadastroStyles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "rgba(25,25,25,0.92)",
    borderRadius: 20,
    padding: 25,
    borderWidth: 1,
    borderColor: "#D32F2F",
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },

  subtitle: {
    color: "#AAA",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    color: "#000",
  },

  button: {
    backgroundColor: "#D32F2F",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  link: {
    color: "#FFF",
    textAlign: "center",
    marginTop: 18,
    textDecorationLine: "underline",
  },
});