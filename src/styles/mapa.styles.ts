import { StyleSheet } from "react-native";

export const mapaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  map: {
    flex: 1,
  },

  infoCard: {
    position: "absolute",
    top: 50,
    alignSelf: "center",

    backgroundColor: "rgba(0,0,0,0.85)",
    padding: 15,

    borderRadius: 12,

    borderWidth: 1,
    borderColor: "#D32F2F",

    minWidth: 140,
    alignItems: "center",
  },

  infoTitle: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },

  infoValue: {
    color: "#D32F2F",
    fontSize: 28,
    fontWeight: "bold",
  },

  refreshButton: {
    position: "absolute",
    bottom: 30,
    left: 20,

    backgroundColor: "#D32F2F",

    paddingHorizontal: 20,
    paddingVertical: 12,

    borderRadius: 12,
  },

  regionButton: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",

    backgroundColor: "#1E1E1E",

    paddingHorizontal: 20,
    paddingVertical: 12,

    borderRadius: 12,

    borderWidth: 1,
    borderColor: "#D32F2F",
  },

  profileButton: {
    position: "absolute",
    bottom: 30,
    right: 20,

    backgroundColor: "#D32F2F",

    paddingHorizontal: 20,
    paddingVertical: 12,

    borderRadius: 12,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});