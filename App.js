import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';
import { useState } from 'react/cjs/react.development';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from "uuid";
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  let [courseGoals, setCourseGoals] = useState([]);
  let [modalIsOpen, setModalIsOpen] = useState(false);

  const addGoals = (enterText) => {
    setCourseGoals((courseGoals) => [{text: enterText, id: uuidv4()},...courseGoals]);
  }

  const deleteGoal = (id) => {
    setCourseGoals((courseGoals) => {
        return courseGoals.filter((courseGoal) => courseGoal.id != id);
    });
  }
  
  const handleModal = () => {
      setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }
 
  return (
    
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
        <Button title="Add Goal" onPress={handleModal}/>
        <GoalInput addGoals={addGoals} modalIsOpen={modalIsOpen} closeModal={closeModal}/>

        <View style={styles.goalContainer}>
            <Text style={styles.title}> Your List Goals! </Text>
            <FlatList data={courseGoals} renderItem={(itemData) => {
              return <GoalItem text={itemData.item.text} id={itemData.item.id} deleteGoal={deleteGoal}/>
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
            />
        </View>
    </View>
    </>
    
      
  );
}

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16,
    },
    goalContainer: {
      flex: 3
    },
    title: {
      fontWeight: "bold",
      marginBottom: 5,
      fontSize: 20,
      marginVertical: 10
    },
    childElement: {
      backgroundColor: "dodgerblue",
      padding: 5,
      borderRadius: 5,
      marginVertical: 5
    },
    childText: {
      color: "white", 
      fontWeight: "bold"
    }
   
});
