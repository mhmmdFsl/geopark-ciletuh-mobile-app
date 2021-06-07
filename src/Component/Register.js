import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import DeviceStorage from '../Services/DevicesStorage';
import { useState } from 'react';

const Register = ({navigation}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfrm, setPasswordConfrm] = useState('')
    const [loading, setLoading] = useState(false)

    const registerUser = async () => {
        setLoading(true)
        try {
            await axios({
                method: 'post',
                url: 'http://10.0.2.2:5000/api/register',
                data: {
                    'name' : name,
                    'email' : email,
                    'password' : password,
                    'password2' : passwordConfrm
                },
                headers: { 'Content-Type': 'application/json' }
            }).then((result) => {
                DeviceStorage.saveItem('token', result.data.token);
                navigation.navigate('LogedIn')
            }).catch((err) => {
                console.log(err)
            })
        } catch (err) {
            throw err
        }
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>
                REGISTER
            </Text>
            <TextInput
                placeholder="Nama"
                onChangeText={(v) => setName(v)}
                style={style.input}
            />
            <TextInput
                placeholder="Email"
                onChangeText={(v) => setEmail(v)}
                style={style.input}
            />
            <TextInput
                placeholder="Password"
                onChangeText={(v) => setPassword(v)}
                secureTextEntry={true}
                style={style.input}
            />
            <TextInput
                placeholder="Konfirmasi Password"
                onChangeText={(v) => setPasswordConfrm(v)}
                secureTextEntry={true}
                style={style.input}
            />

            <TouchableOpacity
                disabled={loading ? true : false}
                onPress={() => registerUser()}
                style={style.btn}>
                <Text style={style.btnText}>DAFTAR</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={style.link}>Sudah memiliki akun ? Masuk disini </Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    title: {
        alignSelf: 'center',
        fontSize: 28,
        marginTop: 80,
        marginBottom: 50,
    },
    input: {
        marginLeft: 60,
        marginRight: 60,
        marginBottom: 15,
        paddingLeft: 30,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#eee',
        borderRadius: 25,
        color: '#333',
        fontSize: 14
    },
    btn: {
        marginTop: 30,
        alignSelf: 'center',
        backgroundColor: '#38908F',
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 25

    },
    btnText: {
        fontSize: 14,
        color: 'white',
    },
    link: {
        fontSize: 11,
        marginTop: 15,
        alignSelf: 'center',
    },
});
export { Register };
