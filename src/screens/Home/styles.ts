import { StyleSheet } from "react-native";

import colors from "../../../assets/styles/styles";

const styles = StyleSheet.create({
  background1: {
    position: "relative",
    height: 173,
    backgroundColor: colors.gray700,
  },
  background2: {
    position: "relative",
    flex: 1,
    backgroundColor: colors.gray600,
  },
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  header: {
    marginTop: 70,
  },
  logo: {
    width: 110,
    height: 32,
  },
  form: {
    width: "90%",
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 32,
    justifyContent: "center",
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: colors.gray500,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.gray700,
    color: colors.gray100,
    fontSize: 16,
    padding: 16,
    marginRight: 4,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: colors.blueDark,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContent: {
    width: 16,
    height: 16,
  },
  listContainer: {
    width: "90%",
  },
});

export default styles;
