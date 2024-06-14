import { View, Text, StyleSheet, Platform, Image } from "react-native";

{/*const getTypeDetail = (type) => {
    switch (type.toLowerCase()){
       case 'Rocket':
        return { borderColor:"FFD700", emoji:"🚀"};
        case 'spaceship':
        return { borderColor:"6493EA", emoji:"🛸"};
        case 'space':
        return { borderColor:"FF5733", emoji:"🛰"};
        case 'Fire':
        return { borderColor:"66CC66", emoji:"🧯"};
        case 'Best Break':
        return { borderColor:"A0A0A0", emoji:"🪂"};
    } 
};
*/}
function Carscard({
    name,
    image,
    type,
    hp,
    Pros,
    Cons,
})
 {
    //const{ borderColor, emoji } = getTypeDetail(type);
    return(
       <View style={[style.card,style.hp]}>
        <View>
            <Text style={style.name}>{name}</Text>
            
            <Text style={style.hp}>{hp}</Text>
           
        </View>
            <Image 
            source={image}
            style={style.image}
            accessibilityLabel={'${name} CARS'}
            resizeMode="contain" />

            <View style={style.typeContainer}>
               
                <Text style={style.typeText}>{type}</Text>
                
            </View>
            <View style={style.ProsContainer}>
                <Text style={style.ProsText}>
                    Pros:{Pros.join(",")}
                </Text>
            </View>
            <View style={style.ConsContainer}>
                <Text style={style.ConsText}>
                    Cons:{Cons.join(",")}
                </Text>
            </View>
       </View>
    );
}
export default Carscard;
const style = StyleSheet.create({
    card:{
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios:{
                shadowOffset: { width:2, height:2 },
                shadowColor:"#333",
                shadowOpacity:0.3,
                shadowRadius:4,
            },
            android:{
               elevation: 5,
            },
        }),
    },
    namecontainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32
    },
    name:{
    
        fontSize: 30,
        fontWeight:"bold"
    },
    hp:{
         
        fontSize: 22,
        
    },
    image:{
        width: "100%",
        height: 200,
        marginBottom: 16,
    },
    typeContainer:{
        alignItems:"center",
        marginBottom: 40
    },
    
    typeText:{
        fontSize: 22,
        fontWeight: "bold",
    },
    ProsContainer:{
        marginBottom: 60,
    },
    ProsText:{
        fontSize: 22,
        fontWeight:"bold",
    },
    ConsContainer:{
        marginBottom:8,
    },
    ConsText:{
       fontSize:22,
       fontWeight:"bold",
    },
});

 