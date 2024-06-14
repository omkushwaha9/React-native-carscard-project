import { View, Image, Text, ScrollView, Button, Pressable } from "react-native";
const logoImg = require("./images/bmw1.jpg");


function p1() {
    return (<View style={{ flex: 1, backgroundColor: "pink", }}>
        <ScrollView>
        <Pressable onPress={()=> console.log("Image pressed")}>
        <Image source={logoImg} style={{width: 400, height: 400}}/>
        </Pressable>
        <Button title="Press" 
             onPress={() => console.log("Button pressed")} 
             color="red" />
        <Pressable onPress={()=> console.log("Text pressed")}>
        <Text>
        iOS developers may be familiar with this concept.
        iOS developers may be familiar with this concept.
        iOS developers may be familiar with this concept.
        iOS developers may be familiar with this concept.
        iOS developers may be familiar with this concept.
        iOS developers may be familiar with this concept.
        iOS developers may be familiar with this concept.
        iOS developers may be familiar with this concept.
        iOS developers may be familiar with this concept.
        iOS developers may be familiar with this concept.
        iOS developers may be familiar with this concept.
        </Text>
        </Pressable>
    </ScrollView>
    </View>
    );
}
export default p1;
