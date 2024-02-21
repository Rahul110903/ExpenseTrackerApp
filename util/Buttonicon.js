import React from "react"
import { Pressable, StyleSheet,View } from "react-native"
import EvilIcons from "react-native-vector-icons/EvilIcons"

const Buttonicon=({color,size,name,onPress})=>{
    return(
        <Pressable onPress={onPress} style={({pressed})=>pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <EvilIcons name={name} color={color} size={size}/>
            </View>
        </Pressable>
    )
}
const styles=StyleSheet.create({
    buttonContainer:{
        borderRadius:24,
        padding:6,
        marginHorizontal:8,
        marginVertical:4,
    },
    pressed:{
        opacity:0.75
    }
})

export default Buttonicon