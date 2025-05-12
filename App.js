import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar as RNStatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const colorScheme = useColorScheme()

  const startAddGoalHandler = () => {
    setIsVisible(true)
  }

  const closeModal = () => {
    setIsVisible(false)
  }

  const addGoalHandler=(enteredGoal) =>{
    setCourseGoals((goals)=> [{text:enteredGoal, id: Math.random().toString()},...goals])
  }

  const deleteGoalHandler = (id) => {
    const filteredGoals = courseGoals.filter((goal)=>goal.id != id)
    setCourseGoals(filteredGoals)    
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add new Goal" color="#a065ec" onPress={startAddGoalHandler}/>
        <GoalInput onAddGoal={addGoalHandler} isVisible={isVisible} onCancel={closeModal}/>
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData)=> <GoalItem itemData={itemData} onDelete={deleteGoalHandler}/>}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:80,
    paddingHorizontal:20,
  },
  goalsContainer:{
    flex:4
  }
});
