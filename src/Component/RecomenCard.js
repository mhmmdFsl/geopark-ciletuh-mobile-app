import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function RecomenCard(props) {
    return (
        <View style = {style.wrapper}>
            <Image source = {{uri: props.uri}} style = {style.img} />
            <TouchableOpacity style = {style.titleLink}>
                <Text style = {style.imgTitle}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RecomenCard

const style = StyleSheet.create({
    wrapper: {
        width: 150,
        height: 200,
        marginLeft: 15,
        marginRight: 5,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,

        elevation: 7,
    },
    img: {
        width: 150,
        height: 200,
        borderRadius: 5
    },
    titleLink: {
        paddingTop: 10,
        paddingLeft: 10,
        height: 50,
        width:150,
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(47, 47, 42, 0.5)'
    },
    imgTitle : {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'OpenSans-Regular'
    }
})
