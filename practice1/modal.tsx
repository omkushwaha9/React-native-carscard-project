import { useState } from "react";
import { View, Button, Text, Modal } from "react-native";


function button1() {
    const[isModalVisible, setIsModalVisible] = useState(false)
    return (
            <View style={{ flex: 1, backgroundColor: "plum", }}>
            <Button title="Press"
             onPress={() => setIsModalVisible(true)} 
             color="red" 
            /> 
            <Modal 
            visible={isModalVisible} 
            onRequestClose={() => setIsModalVisible(false)}
            animationType="slide"
            >
            
            <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
                <Text> Model content </Text>
                <Button 
                title="Close" 
                color="midnightblue"
                onPress={() => setIsModalVisible(false)}
                />

            </View>
            </Modal>
    </View>
    );
}
export default button1;