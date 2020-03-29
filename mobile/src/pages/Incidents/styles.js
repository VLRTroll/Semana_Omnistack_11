import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f5",
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  headerText: {
    fontSize: 15,
    color: "#737380"
  },

  headerTextBold: {
    fontWeight: "bold"
  },

  title: {
    marginTop: 48,
    marginBottom: 16,

    color: "#13131a",
    fontSize: 30,
    fontWeight: "bold"
  },

  description: {
    color: "#737380",
    fontSize: 16,
    lineHeight: 24
  },

  incidentList: {
    marginTop: 32
  },

  incident: {
    backgroundColor: "#fff",
    borderRadius: 8,

    padding: 24,
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

  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  detailsButtonText: {
    color: "#e02041",
    fontSize: 15,
    fontWeight: "bold"
  }
});
