import React, { Component } from 'react';
import { TextField, AuthButton } from './../../Common';
import { AuthStyles } from './AuthStyles';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView
} from 'react-native';

import SplashScreen from 'react-native-splash-screen'

export class Signin extends Component {
    
    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }

    static navigationOptions = {
        header:
            <View style={AuthStyles.Header}>
                <View style={AuthStyles.HeaderLogoContainer}>
                    <View>
                        <Image source={require('./../../Resourses/Logo.png')} style={AuthStyles.LogoImage} opacity={0.4} />
                        <Text style={AuthStyles.LogoText}>LOGO</Text>
                    </View>
                </View>
            </View>
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView contentContainerStyle={{ display: 'flex' }}>
                <View style={AuthStyles.TabContainer}>
                    <View style={AuthStyles.SigninTextFieldsContainer}>
                        <TextField underlineColorAndroid="transparent" icon={require('./../../Resourses/signin_signup_icons/user_id_hdpi.png')} placeHolder="User ID" />
                        <TextField underlineColorAndroid="transparent" icon={require('./../../Resourses/signin_signup_icons/password_hdpi.png')} placeHolder="Password" />
                    </View>
                    <View style={AuthStyles.AuthButton}>
                        <AuthButton title="Continue" onPress={() => navigate('dashboard')} />
                        <TouchableOpacity>
                            <Text style={AuthStyles.ForgotPassText}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
