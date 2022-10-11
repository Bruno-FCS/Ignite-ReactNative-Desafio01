import { StyleSheet } from "react-native";

import colors from "../../../assets/styles/styles";

const styles = StyleSheet.create({
  emptyTasksContainer: {
    borderTopWidth: 1,
    borderTopColor: colors.gray400,
  },
  emptyTasksAlignment: {
    alignItems: "center",
  },
  emptyTasksImage: {
    width: 56,
    height: 56,
    marginTop: 48,
    marginBottom: 16,
  },
  emptyTasksText1: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.gray300,
  },
  emptyTasksText2: {
    fontSize: 14,
    color: colors.gray300,
  },
});

export default styles;
