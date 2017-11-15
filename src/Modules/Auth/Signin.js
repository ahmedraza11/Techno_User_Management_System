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

export class Signin extends Component {
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
        return (
                <ScrollView contentContainerStyle={{ display: 'flex'}}>
                    <View style={AuthStyles.TabContainer}>
                        <View style={AuthStyles.SigninTextFieldsContainer}>
                            <TextField underlineColorAndroid="transparent" icon={require('./../../Resourses/signin_signup_icons/user_id_hdpi.png')} placeHolder="User ID" />
                            <TextField underlineColorAndroid="transparent" icon={require('./../../Resourses/signin_signup_icons/password_hdpi.png')} placeHolder="Password" />
                        </View>
                        <View style={AuthStyles.AuthButton}>
                            <AuthButton title="Continue" />
                            <TouchableOpacity>
                                <Text style={AuthStyles.ForgotPassText}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
        );
    }
}
