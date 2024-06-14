import { View, Alert, Button } from "react-native";
function alert1(){
    return (
             <View style={{flex: 1, backgroundColor:"lavender", padding: 60 }}>
              <Button 
              title="ALERT" 
              onPress={() => Alert.alert("Invalide data","You pressed Alert Button ")} />
                <Button
                title="ALERT2"
                onPress={() =>Alert.alert("Invalide data!","DOB incorrect")} />
                <Button
                title="ALERT3"
                onPress={() =>
                    Alert.alert("Invalid Data!","Dob incorrect",[
                        {
                        text:"Cancel",
                        onPress:() => console.log("Cancel pressed"),
                        },
                        {
                            text:"Ok",
                            onPress: () => console.log("Ok pressed"),
                        },
                    ])
                }/>
             </View>
    );
}
export default alert1;