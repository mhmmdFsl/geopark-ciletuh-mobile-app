import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet,
    Image
} from 'react-native';
import {useDispatch} from 'react-redux'

import AsyncStorage from '@react-native-community/async-storage';
import { addToken } from '../Services/tokenSlice';

const SplashScreen = ({ navigation }) => {
    //State for ActivityIndicator animation
    const [animating, setAnimating] = useState(true);
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            setAnimating(false);
            AsyncStorage.getItem('token').then((value) => {
                navigation.replace(value === null ? 'Auth' : 'LogedIn')
            })
        }, 5000);
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator
                animating={animating}
                color="#FFFFFF"
                size="large"
                style={styles.activityIndicator}
            />
        </View>
    );
};

export {SplashScreen};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#307ecc',
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80,
    },
});