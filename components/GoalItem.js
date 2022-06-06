import { StyleSheet, View, Text, Pressable } from "react-native";
import { reportLogBoxError } from "react-native/Libraries/LogBox/Data/LogBoxData";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#9e0acc" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 8,
    backgroundColor: "#1e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
export default GoalItem;
