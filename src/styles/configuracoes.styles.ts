import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.55)",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 380,

    backgroundColor: "rgba(25,25,25,0.92)",

    borderRadius: 15,

    padding: 25,

    borderWidth: 1,
    borderColor: "#D32F2F",
  },

  logo: {
    width: 90,
    height: 90,
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginBottom: 25,
  },

  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  optionText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },

  description: {
    color: "#AAA",
    marginTop: 10,
    marginBottom: 25,
    lineHeight: 20,
  },

  button: {
    backgroundColor: "#D32F2F",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});