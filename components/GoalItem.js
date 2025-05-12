import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({itemData, onDelete}) => {
  const deleteGoalHandler = ()=> {
    onDelete(itemData.item.id)
  }
  return(
    <Pressable style={({pressed})=> [pressed && styles.pressed]} onPress={deleteGoalHandler}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  )
}

export default GoalItem;

const styles = StyleSheet.create({
  
  goalItem:{
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor:"#5e0acc",
  },
  goalText:{
    color:"white",
  },
  pressed:{
    opacity:0.7
  }
})