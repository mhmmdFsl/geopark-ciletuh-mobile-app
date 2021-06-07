import React, { Component } from 'react';
import { View } from 'react-native';
import {Login, Register} from  '../Component/';

export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin : true,
        };
        this.wichForm =  this.wichForm.bind(this);
        this.authSwitch = this.authSwitch.bind(this);
    }

    authSwitch() {
        this.setState({
            showLogin : !this.state.showLogin,
        });
    }

    wichForm() {
        if (!this.state.showLogin) {
            return (
                <Register authSwitch={this.authSwitch} />
            );
        } else {
            return (
                <Login authSwitch={this.authSwitch} />
            );
        }
    }

    render() {
        return (
            <View style={style.container}>
                {this.wichForm()}
            </View>
        );
    }
}

const style = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
};
