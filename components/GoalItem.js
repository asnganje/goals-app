import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({itemData, onDelete}) => {
  return(
      <View style={styles.goalItem}>
        <Pressable
          android_ripple={{color:"#dddddd"}}
          style={({pressed})=> [pressed && styles.pressed]}
          onPress={onDelete.bind(this, itemData.item.id)}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
        </Pressable>
      </View>
  )
}

export default GoalItem;

const styles = StyleSheet.create({
  
  goalItem:{
    margin:8,
    borderRadius:6,
    backgroundColor:"#5e0acc",
  },
  goalText:{
    color:"white",
    padding:8
  },
  pressed:{
    opacity:0.7
  }
})