import { View, Button } from "react-native";


function button1() {
    return (<View style={{ flex: 1, backgroundColor: "plum", }}>
             <Button title="Press" //title to show on the button
             onPress={() => console.log("Button pressed")} //gives the output if its completer or not
             
             color="midnightnlue" //to set the color 
             disabled// to disable the work of the button  
              /> 
    </View>
    );
}
export default button1;