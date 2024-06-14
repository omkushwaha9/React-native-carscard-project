import { View,Text, StyleSheet } from "react-native";
function box1({children, style}){
       return(
        <View style={[style.box, style]}>
            <Text style={style.text}>{children}</Text>
        </View>
       );
}
export default box1;

const style = StyleSheet.create({
    box: {
        backgroundColor:"blue",
        padding: 20,
    },
    text:{
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    },
});