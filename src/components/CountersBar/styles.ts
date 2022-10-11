import { StyleSheet } from "react-native";

import colors from "../../../assets/styles/styles";

const styles = StyleSheet.create({
  countersBar: {
    width: "90%",
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  countersContainer: {
    flexDirection: "row",
  },
  counterTextR: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.blue,
  },
  counterTextL: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.purple,
  },
  filling: {
    width: 8,
  },
  counterCircle: {
    backgroundColor: colors.gray400,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  counterNumber: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.gray200,
  },
});

export default styles;
