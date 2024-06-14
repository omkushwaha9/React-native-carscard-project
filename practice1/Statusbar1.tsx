import { View, StatusBar } from "react-native";
function StatusBar1(){
    return (
             <View style={{flex: 1, backgroundColor:"lavender", padding: 60 }}>
                <StatusBar backgroundColor="black" // used for background color
                barStyle={"light-content"} // font colour
                hidden // hides the contend 
                />
             </View>
    );
}
export default StatusBar1;