import { View,Text, StyleSheet } from "react-native";

function styling1(){
    return(
        <View style={style.container}>
            <View style={style.darkmode}>
                <Text style={style.darkModetext}>
                    STYLE INHERITANCE_  
                    <Text style={style.boldText}> 
                        IN BOLD
                    </Text>
                </Text>
            </View>
            <View style={[style.box, style.lightbluebg,style.boxshadow ]}>
            <Text style={{borderRadius:5, backgroundColor:"red"}}>
                lightblue Box
            </Text>
            </View>
            <View style={[style.box, style.lightgreenbg,style.androidshadow ]}>
                <Text style={{borderRadius:5, backgroundColor:"white"}}>
                    Lightgreen Box
                </Text>
            </View>

            </View>
    );
}
export default styling1;
 
const style = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor: "pink",
        padding: 60},
    darkmode:{
        backgroundColor: "black",
    },
    darkModetext:{
        color:"white",
    },
    boldText:{
        fontWeight:"bold",
    },
    box:{
        width: 270,
        height: 270,
        paddingHorizontal:10,
        paddingVertical: 20,
        marginVertical:10,
        borderWidth:2,
        borderColor:"black",
        borderRadius:20,
        
    },
    lightbluebg:{
        backgroundColor:"lightblue",
        
    },
    lightgreenbg:{
        backgroundColor:"lightgreen",
        
    },
    boxshadow:{
        shadowColor:"red",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    androidshadow:{
        elevation:20,
        shadowColor:"red"
    },

});