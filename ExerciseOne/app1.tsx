import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";

import Carscard from "./component/Carscard";

function app(){

    const PorscheData = {
        name: "Porsche",
        image: require("./image/pb1.jpg"),
        type: "TURBO",
        hp: 911,
        Pros: [" luxurious"," Classic","  Performance"],
        Cons: [" High maintenance"," Expensive"],
        };

    const BmwData = {
        name: "BMW",
        image: require("./image/bmw1.jpg"),
        type: "SPEED",
        hp: "M3",
        Pros: [" Innovative"," versatility","  luxurious"],
        Cons: [" High Ownership cost"," Oil Leaks"],
        };
     const Rolls_RoyceData = {
        name: "Rolls-Royce",
        image: require("./image/rr1.jpg"),
        type: "LUXURIOUS",
        hp: "LA ROSE NOIRE DROPTAIL",
        Pros: [" Powerfull"," hand-made","  Luxurious"],
        Cons: [" High Purchasing"," Potential problems"],
        };
    const MercedesData = {
        name: "Mercedes",
        image: require("./image/Mercedes1.jpg"),
        type: "PRECISION",
        hp: "BENZ AMG GT ",
        Pros: [" Reliability"," Quality"," Horsepower"],
        Cons: [" Engine misfires","           High Maintenance Cost"],
        };
    const FerrariData = {
        name: "Ferrari",
        image: require("./image/Ferrari1.jpg"),
        type: "ELEGANCE",
        hp: "PORTOFINO M",
        Pros: [" Beautiful"," Unique","       Driving Pleasure"],
        Cons: [" Super Expensive","            No Modification"],
        };    
                    
            

    return(
        <SafeAreaView style={[style.container]}>
            <ScrollView>
            <Carscard {...PorscheData} />
            <Carscard {...BmwData} />
            <Carscard {...Rolls_RoyceData} />
            <Carscard {...MercedesData} />
            <Carscard {...FerrariData} />
            </ScrollView>
        </SafeAreaView>
        
    );
}
export default app;

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f5f5f5",
        paddingTop: Platform.OS === "android" ? 25:0,
    },
   
});
        