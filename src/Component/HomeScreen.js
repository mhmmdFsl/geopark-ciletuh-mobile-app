import React, {useState, useEffect} from 'react'
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import RecomenCard from './RecomenCard'

const HomeScreen = () => {

    const [dataSource, setDataSource] = useState({
        title : 'Curug Cimarinjung',
        uri: 'https://petualang.travelingyuk.com/uploads/2020/10/Curug-Cimarinjung-dengan-pemandangan-sawah-831x1024.jpg'
    })

    // useEffect(() => {
    //     let items = Array.apply(null, Array(3)).map((v, i) => {
    //         return {
    //             id: i,
    //             src: 'https://petualang.travelingyuk.com/uploads/2020/10/Curug-Cimarinjung-dengan-pemandangan-sawah-831x1024.jpg',
    //             title: 'Curug Cimarinjung'
    //         };
    //     });
    //     setDataSource(items);
    // }, []);

    return(
            <View style={style.wrapper}>
                <Text style = {style.title}>Ciletuh Mobile App</Text>
                <MapView
                    style={style.map}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: -6.912303108754971,
                        longitude: 106.89754117927,
                        latitudeDelta: 0.0043,
                        longitudeDelta: 0.0034,
                    }}>
                    <Marker
                        coordinate={{ latitude: -6.912303108754971, longitude: 106.89754117927 }}
                        image={{ uri: 'custom_pin' }}
                    />
                </MapView>
                <Text style = {style. title}>Rekomendasi Wisata</Text>
                <ScrollView style = {style.container} horizontal = {true}>
                    <RecomenCard uri = {dataSource.uri} title = {dataSource.title} />
                    <RecomenCard uri = {dataSource.uri} title = {dataSource.title} />
                    <RecomenCard uri = {dataSource.uri} title = {dataSource.title} />
                </ScrollView>
        </View>
    )
}

export {HomeScreen}

const style = StyleSheet.create({
    wrapper: {
        ...StyleSheet.absoluteFillObject,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    container: {
    },
    map: {
        height: 170,
        marginBottom: 15,
    },
    title: {
        fontSize: 18,
        marginBottom: 15,
        fontFamily: 'OpenSans-Bold',
        letterSpacing: 1.5
    }
})