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
    minWidth: 150,
    alignItems: "center",
  },

  infoTitle: {
    color: "#FFF",
    fontWeight: "bold",
  },

  infoValue: {
    color: "#D32F2F",
    fontSize: 30,
    fontWeight: "bold",
  },

  menuContainer: {
    position: "absolute",
    bottom: 25,
    left: 10,
    right: 10,

    flexDirection: "row",
    justifyContent: "space-around",
  },

  menuCard: {
    backgroundColor: "rgba(0,0,0,0.85)",
    width: 80,
    height: 80,

    borderRadius: 15,

    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#D32F2F",
  },

  menuIcon: {
    fontSize: 24,
  },

  menuText: {
    color: "#FFF",
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 12,
  },
});