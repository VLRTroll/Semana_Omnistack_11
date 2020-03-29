import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  incident: {
    backgroundColor: "#fff",
    borderRadius: 8,

    padding: 24,
    marginTop: 48,
    marginBottom: 16
  },

  incidentProperty: {
    color: "#41414d",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase"
  },

  incidentValue: {
    marginTop: 8,
    marginBottom: 24,

    color: "#737380",
    fontSize: 15
  },

  contactBox: {
    backgroundColor: "#fff",
    borderRadius: 8,

    padding: 24,
    marginBottom: 16
  },

  heroTitle: {
    color: "#13131a",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 30
  },

  heroDescription: {
    color: "#737380",
    fontSize: 15,

    marginTop: 16
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: 16
  },

  action: {
    justifyContent: "center",
    alignItems: "center",

    height: 50,
    width: "48%",

    backgroundColor: "#e02041",
    borderRadius: 8
  },

  actionText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold"
  }
});
