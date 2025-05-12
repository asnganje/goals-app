import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({onAddGoal, isVisible, onCancel}) => {
  const [enteredGoalText, setEnteredGoalText] = useState('')
   const goalInputHandler=(enteredText) =>{
    setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText)
    setEnteredGoalText('')
    onCancel()
  }

  return(
    <Modal visible={isVisible}>
    <View style={styles.inputContainer}>
      <Image
        source={require('../assets/images/goal.png')}
        style={styles.image}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Your course goals...'
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title='Add goal' onPress={addGoalHandler}/>
        </View>
        <View style={styles.button}>
          <Button title='Cancel' onPress={onCancel}/>
        </View>
      </View>
    </View>
    </Modal>
  )
}
export default GoalInput;

const styles = StyleSheet.create({
  textInput:{
    borderWidth:1,
    borderColor:"#cccccc",
    width:"100%",
    padding:8,
    color:"white"
  },
   inputContainer:{
    flex:1,
    gap:10,
    padding:30,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#311b6b"
  },
  buttonContainer:{
    marginTop:16,
    flexDirection:"row",
    gap:10
  },
  button:{
    width:100,
    marginHorizontal:8
  },
  image:{
    width:100,
    height:100, 
    margin:20
  }
})