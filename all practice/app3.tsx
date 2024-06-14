import { View, StyleSheet, Text } from "react-native";

function app3(){
       return(
        <View style={{ backgroundColor: "pink", flex: 1}}>
        <View style={style.container}>
            
            <Text style={{ backgroundColor: "#0000ff", flexShrink:1 }}> BOX 1 </Text>
            <Text style={{ backgroundColor: "#ffa500", flexShrink:2 }}> BOX 2 </Text>
            <Text style={{ backgroundColor: "#ff0000", flexGrow: 1 }}> BOX 3 </Text>
            <Text style={{ backgroundColor: "#660066", flexGrow:2 }}> BOX 4 </Text>
            <Text style={{ backgroundColor: "#ffe4e1" }}> BOX 5 </Text>
            <Text style={{ backgroundColor: "#ffd700" }}> BOX 6 </Text>
            <Text style={{ backgroundColor: "#ff00ff" }}> BOX 7 </Text>
            <Text style={{ backgroundColor: "#4b0082" }}> BOX 8 </Text>
            </View>
        </View>
        
       );
}
export default app3;

const style = StyleSheet.create({
    box:{
        height:100,
        width:100,
    },
    container:{
        flex: 1,
        //flexGrow:1,
        //flexDirection:"row",
        //alignItems:"center",
        //alignContent:"space-around",
        //flexWrap:"wrap",
        // justifyContent: "flex-start",
        //height: 200,
        //rowGap:20,
        //columnGap:30 ,
        //gap: 25,
        marginTop: 6,
        borderWidth:6,
        borderColor: "lavender",
    },

});