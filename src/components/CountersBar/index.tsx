import { Text, View } from "react-native";

import styles from "./styles";

type Props = any;

export default ({ tasksCreated, tasksFinished }: Props) => {
  return (
    <View style={styles.countersBar}>
      <View style={styles.countersContainer}>
        <Text style={styles.counterTextR}>Criadas</Text>
        <View style={styles.filling}></View>
        <View style={styles.counterCircle}>
          <Text style={styles.counterNumber}>{tasksCreated}</Text>
        </View>
      </View>
      <View style={styles.countersContainer}>
        <Text style={styles.counterTextL}>Concluídas</Text>
        <View style={styles.filling}></View>
        <View style={styles.counterCircle}>
          <Text style={styles.counterNumber}>{tasksFinished}</Text>
        </View>
      </View>
    </View>
  );
};
