import React from "react";

import{
    View,
    Text,
    StyleSheet,
    useColorScheme
} from "react-native"

function Apppro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
    return(
    <View style={Styles.container}>
        <Text style={isDarkMode ? Styles.whiteText:
            Styles.darkText}>
            Hello
        </Text>
    </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText:{
           color: '#FFFFFF'
        },
        darkText:{
           color: '#000000'
        }
    
})

export default Apppro;