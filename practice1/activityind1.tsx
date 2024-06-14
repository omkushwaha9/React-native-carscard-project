import { View, ActivityIndicator } from "react-native";
function activityind1(){
    return (
             <View style={{flex: 1, backgroundColor:"lavender", padding: 60 }}>
                <ActivityIndicator size="small" color="red"  />

                <ActivityIndicator size="large" color="green"  />
                
             </View>
    );
}
export default activityind1;