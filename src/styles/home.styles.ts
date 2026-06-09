import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },

  banner: {
    height: 300,
    justifyContent: "center",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "#FFF",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#D32F2F",
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderRadius: 10,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  section: {
    padding: 20,
  },

  sectionTitle: {
    color: "#FFF",
    fontSize: 22,
    marginBottom: 15,
    textAlign: "center",
  },

  description: {
    color: "#DDD",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },

  partners: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },

  logo: {
    width: 120,
    height: 70,
    resizeMode: "contain",
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
});