import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({onAddGoal}) => {
  const [enteredGoalText, setEnteredGoalText] = useState('')
   const goalInputHandler=(enteredText) =>{
    setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return(
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Your course goals...'
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title='Add goal' onPress={addGoalHandler}/>
    </View>
  )
}
export default GoalInput;

const styles = StyleSheet.create({
  textInput:{
    borderWidth:1,
    borderColor:"#cccccc",
    width:"70%",
    padding:8,
  },
   inputContainer:{
    flex:1,
    flexDirection:"row",
    gap:10,
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:"#cccccc"
  }
})