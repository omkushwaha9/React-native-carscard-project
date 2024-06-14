import { View, StyleSheet, Text } from "react-native";

function app3(){
       return(
        <View style={{ backgroundColor: "pink", flex: 1}}>
        <View style={style.container}>
            <Text style={{ backgroundColor: "#0000ff",alignSelf:"flex-start" }}> BOX 1 </Text>
            <Text style={{ backgroundColor: "#ffa500",alignSelf:"flex-end" }}> BOX 2 </Text>
            <Text style={{ backgroundColor: "#ff0000"}}> BOX 3 </Text>
            <Text style={{ backgroundColor: "#660066" }}> BOX 4 </Text>
            <Text style={{ backgroundColor: "#ffe4e1",flex: 1 }}> BOX 5 </Text>
            <Text style={{ backgroundColor: "#ffd700",flex: 1 }}> BOX 6 </Text>
            <Text style={{ backgroundColor: "ff00ff",flex: 1 }}> BOX 7 </Text>
            <Text style={{ backgroundColor: "#4b0082",flex: 1 }}> BOX 8 </Text>
        </View>
        </View>
       );
}
export default app3;

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"baseline",
        flexDirection:"coloum",
        marginTop: 6,
        borderWidth:6,
        borderColor: "lavender",
    },

});