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

import SplashScreen from 'react-native-splash-screen';

export class Signin extends Component {

    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }

    static navigationOptions = {
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView contentContainerStyle={{ display: 'flex' }}>
                <View>
                    <View style={{ width: '100%', height: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4081F2', elevation: 3 }}>
                        <Image source={require('./../../Resourses/logo_white.png')} style={{ width: 150, height: 150 }} />
                    </View>
                    <View style={AuthStyles.TabContainer}>
                        <View style={AuthStyles.SigninTextFieldsContainer}>
                            <TextField underlineColorAndroid="transparent" icon={require('./../../Resourses/signin_signup_icons/user_id_hdpi.png')} placeHolder="User ID" />
                            <TextField underlineColorAndroid="transparent" passwordType={true} icon={require('./../../Resourses/signin_signup_icons/password_hdpi.png')} placeHolder="Password" />
                        </View>
                        <View style={AuthStyles.AuthButton}>
                            <AuthButton title="Continue" onPress={() => navigate('dashboard')} />
                            <TouchableOpacity>
                                <Text style={AuthStyles.ForgotPassText}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
