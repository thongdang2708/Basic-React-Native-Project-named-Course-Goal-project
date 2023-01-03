import {StyleSheet, TextInput, Button, View, Modal, Image} from "react-native";
import { useState } from "react/cjs/react.development";

function GoalInput({addGoals, modalIsOpen, closeModal}) {

    let [enterText, setEnterText] = useState("");

    const handleChange = (enteredText) => {
        setEnterText(enteredText);
    };

    const handleSubmit = () => {
        addGoals(enterText);
        closeModal();
        setEnterText("");
    };

    const handleClose = () => {
        closeModal();
    }


  return (
    <Modal visible={modalIsOpen} animationType="slide">
    <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/goal.png")}/>
        <TextInput style={styles.textInput} placeholder="Your course goal!" value={enterText} onChangeText={handleChange}/>

        <View style={styles.buttonsContainer}>
            <View style={styles.buttons}>
            <Button title="Add Goal" onPress={handleSubmit} color="#e4d0ff"/>
            </View>

            <View style={styles.buttons}>
            <Button title="Cancel And Go Back" onPress={handleClose} color="#f31282"/>
            </View>
        </View>
       
    </View>
    </Modal>
    
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textInput: {
        width: "80%",
        borderWidth: 2,
        borderColor: "grey",
        padding: 5,
        borderRadius: 5,
        color: "black",
        backgroundColor: "#e4d0ff"
    },
    buttonsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    buttons: {
        marginTop: 5,
        marginHorizontal: 5
    },
    image: {
        width: "100%",
        height: "50%"
    } 

});

export default GoalInput