import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  const goalInputHandler=(enteredText) =>{
    setEnteredGoalText(enteredText)
  }

  const addGoalHandler=() =>{
    setCourseGoals((goals)=> [enteredGoalText,...goals])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goals...'
          onChangeText={goalInputHandler}
        />
        <Button title='Add goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
        <View>
          {courseGoals.map((goal)=> {
            return(
              <View style={styles.goalItem}>
                <Text key={goal} style={styles.goalText}>{goal}</Text>
              </View>
            )
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:20
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
  },
  textInput:{
    borderWidth:1,
    borderColor:"#cccccc",
    width:"70%",
    padding:8,
  },
  goalsContainer:{
    flex:4
  },
  goalItem:{
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor:"#5e0acc",
  },
  goalText:{
    color:"white",
  }
});
