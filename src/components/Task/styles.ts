import { StyleSheet } from "react-native";

import colors from "../../../assets/styles/styles";

const styles = StyleSheet.create({
  taskCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: colors.gray500,
    borderWidth: 1,
    borderColor: colors.gray400,
    borderRadius: 8,
    marginBottom: 8,
  },
  checkboxIcon: {
    width: 17.5,
    height: 17.5,
  },
  deleteIcon: {
    width: 12.5,
    height: 14,
  },
  filling: {
    width: 8,
  },
  taskTextContainer: {
    width: 275,
  },
  taskTextDefault: {
    fontSize: 14,
    color: colors.gray100,
  },
  taskTextChecked: {
    fontSize: 14,
    color: colors.gray300,
    textDecorationLine: "line-through",
  },
});

export default styles;
