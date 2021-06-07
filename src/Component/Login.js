import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';
// import DeviceStorage from '../Services/DevicesStorage';
import { useState, useEffect} from 'react';
import {addToken, setIsLogin} from '../Services/tokenSlice'
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()

    const storeToken = async (token) => {
        try {
            await AsyncStorage.setItem('token', token)
        } catch (err) {
            console.log(err)
        }
    }

    const onLogin = async () => {

        try {
            await axios({
                method: 'post',
                url: 'http://10.0.2.2:5000/api/login',
                data: {
                    'email' : email,
                    'password' : password
                },
                headers: {'Content-Type' : 'application/json'}
                }).then((result) => {
                    if (result.status === 200) {
                        // DeviceStorage.saveItem('token', result.data.token);
                        storeToken(result.data.token).then(() => {
                            navigation.navigate('LogedIn')
                        })
                    }
                }).catch((err) => {
                    setErrorMessage('Email atau password salah !')
                })
        } catch (err) {
            console.error(err);
        }
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
        err: {
            fontSize: 14,
            alignSelf: 'center',
            color: 'red',
            marginBottom: 10
            
        }
    });

    return (
        <View style = {style.container}>
            <Text style = {style.title}>LOGIN</Text>

            <Text style = {style.err}>{errorMessage}</Text>
            <TextInput
                placeholder="Email"
                style={style.input}
                onChangeText={value => setEmail(value)} />
            <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={style.input}
                onChangeText={value => setPassword(value)} />
            < TouchableOpacity
                style={style.btn}
                onPress={() => onLogin()}>
                <Text style={style.btnText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={style.link}>Belum punya akun ? Daftar disini</Text>
            </TouchableOpacity>
        </View>
    );
}

// class Login extends Component {

//     constructor (props) {
//         super(props);
//         this.state = {
//             email: "",
//             password: "",
//             loading: false
//         };
//     }

//     onLogin (){
//         axios({
//             method: 'post',
//             url: 'http://10.0.2.2:5000/api/login',
//             data: {
//                 'email' : this.state.email,
//                 'password' : this.state.password
//             },
//             headers: {'Content-Type' : 'application/json'}
//         }).then((result) => {
//             console.log(result.data.token);
//             DeviceStorage.saveItem('token', result.data.token);
//             // this.props.newJWT(result.data.jwt);
//         }).catch((err) => {
//             throw err;
//         });
//     }

//     render() {
//         return (
//             <View style = {style.container}>
//                 <Text style = {style.title}>LOGIN</Text>

//                 <TextInput
//                     placeholder = "Email"
//                     style = {style.input}
//                     onChangeText = {value => this.setState({email: value})} />
//                 <TextInput
//                     placeholder = "Password"
//                     secureTextEntry = {true}
//                     style = {style.input}
//                     onChangeText = {value => this.setState({password: value})}/>
//                 < TouchableOpacity 
//                     style = {style.btn}
//                     onPress = {() => this.onLogin()}>
//                     <Text style = {style.btnText}>LOGIN</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress = {() => this.props.authSwitch()}>
//                     <Text style = {style.link}>Belum punya akun ? Daftar disini</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }

// const style = StyleSheet.create({
//     container: {
//         width: '100%',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//     },
//     title: {
//         alignSelf: 'center',
//         fontSize: 28,
//         marginTop: 80,
//         marginBottom: 50,
//     },
//     input: {
//         marginLeft: 60,
//         marginRight: 60,
//         marginBottom: 15,
//         paddingLeft: 30,
//         paddingTop: 10,
//         paddingBottom: 10,
//         backgroundColor: '#eee',
//         borderRadius: 25,
//         color: '#333',
//         fontSize: 14
//     },
//     btn: {
//         marginTop: 30,
//         alignSelf: 'center',
//         backgroundColor: '#38908F',
//         paddingLeft: 80,
//         paddingRight: 80,
//         paddingTop: 10,
//         paddingBottom: 10,
//         borderRadius: 25

//     },
//     btnText: {
//         fontSize: 14,
//         color: 'white',
//     },
//     link: {
//         fontSize: 11,
//         marginTop: 15,
//         alignSelf: 'center',
//     },
// });

export {Login};

