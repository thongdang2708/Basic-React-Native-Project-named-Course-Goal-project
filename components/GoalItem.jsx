
import {StyleSheet, View, Text, Pressable} from "react-native";

function GoalItem({text, id, deleteGoal}) {

  const handleDelete = (id) => {
    deleteGoal(id);
  }

  return (
   
    <View style={styles.childElement}>
        <Pressable onPress={() => handleDelete(id)}  android_ripple={{color: "dddddd"}} style={({pressed}) => pressed && styles.pressButton}>
        <Text style={styles.childText}> {text}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    childElement: {
      backgroundColor: "dodgerblue",
      marginVertical: 5
    },
    childText: {
      color: "white",
      padding: 5
    },
    pressButton: {
      opacity: 0.5
    }
    
});

export default GoalItem