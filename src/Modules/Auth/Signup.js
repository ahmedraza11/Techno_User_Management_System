import React, { Component } from 'react';
import { TextField, AuthButton } from './../../Common';
import {AuthStyles} from './AuthStyles';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView
} from 'react-native';

export class Signup extends Component {
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
            <ScrollView>
                <View>
                    <View style={AuthStyles.TabContainer}>
                        <View style={AuthStyles.SignunTextFieldsContainer}>
                            <TextField underlineColorAndroid="transparent" icon={require('./../../Resourses/signin_signup_icons/user_id_hdpi.png')} placeHolder="User ID" />
                            <TextField underlineColorAndroid="transparent" icon={require('./../../Resourses/signin_signup_icons/password_hdpi.png')} placeHolder="Password" />
                            <TextField underlineColorAndroid="transparent" icon={require('./../../Resourses/signin_signup_icons/email_hdpi.png')} placeHolder="Email" />
                            <TextField underlineColorAndroid="transparent" icon={require('./../../Resourses/signin_signup_icons/phone_hdpi.png')} placeHolder="Phone" style={{ paddingLeft: 10 }} />
                        </View>
                        <View style={AuthStyles.AuthButton} >
                            <AuthButton title="Sign up" />
                            <TouchableOpacity>
                                <Text style={AuthStyles.ForgotPassText}>Have an account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
