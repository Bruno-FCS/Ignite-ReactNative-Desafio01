import { Text, View, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

type Props = {
  text: string;
  checked: boolean;
  onToggleCheckbox: () => void;
  onRemove: () => void;
};

export default ({ text, checked, onToggleCheckbox, onRemove }: Props) => {
  return (
    <View style={styles.taskCard}>
      <TouchableOpacity onPress={onToggleCheckbox}>
        <Image
          style={styles.checkboxIcon}
          source={
            checked
              ? require("../../../assets/images/checked-checkbox.png")
              : require("../../../assets/images/unchecked-checkbox.png")
          }
        />
      </TouchableOpacity>
      <View style={styles.taskTextContainer}>
        <Text style={checked ? styles.taskTextChecked : styles.taskTextDefault}>
          {text}
        </Text>
      </View>
      <TouchableOpacity onPress={onRemove}>
        <Image
          style={styles.deleteIcon}
          source={require("../../../assets/images/trash.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
