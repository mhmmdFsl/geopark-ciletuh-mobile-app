import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

const HomeScreen = () => {
    return(
            <View style={style.wrapper}>
                <MapView
                    style={style.map}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}></MapView>
                <ScrollView>
                    <Text>Test</Text>
                </ScrollView>
        </View>
    )
}

export {HomeScreen}

const style = StyleSheet.create({
    wrapper: {
        ...StyleSheet.absoluteFillObject
    },
    map: {
        height: 170,
        margin:15,
        marginRight: 15
    }
})