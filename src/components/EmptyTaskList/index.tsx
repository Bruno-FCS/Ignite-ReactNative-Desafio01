import { Text, View, Image } from "react-native";

import styles from "./styles";

export default () => {
  return (
    <View style={styles.emptyTasksContainer}>
      <View style={styles.emptyTasksAlignment}>
        <Image
          style={styles.emptyTasksImage}
          source={require("../../../assets/images/emptyTasks.png")}
        />
        <Text style={styles.emptyTasksText1}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.emptyTasksText2}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
};
