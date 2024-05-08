import React from 'react'
import { Text, View, Image } from 'react-native'
import { StyleSheet } from 'react-native'


export const HeaderView = () => {
    return (
        <>
        <View style={UserStyles.container} >
            <Text style={UserStyles.name}>Hello, Erik</Text>
            <View style={UserStyles.icon}>
                <Text style={UserStyles.icon}>
                    <Image style={UserStyles.Image}  source={require('../../assets/favicon.png')} />
                </Text>
                
            </View>
        </View>
        <View style={HeaderStyles.container}>
            <Text style={HeaderStyles.title}>Let's Learning Together!</Text>
        </View>
        </>
    )
}

const UserStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',	
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        color: 'black',
        fontWeight: 'bold',
    },
    name: {
        color: 'black',
        fontSize: 20,
        fontWeight: '400',	
    },
    Image: {
        backgroundColor: 'white',
        borderRadius: 50
    },
    
})


const HeaderStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',	
    },
    title: {
        color: 'black',
        fontSize: 40,
        fontWeight: '600',	
    },

})


