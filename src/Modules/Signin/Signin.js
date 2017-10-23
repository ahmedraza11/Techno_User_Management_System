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

import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';


// // Sigin in Tab

const SigninTab = () => {
    // let windowHeight = window.d
    return (
        <ScrollView>
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

// // Sigup in Tab

const SignupTab = () => {
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

class Signin extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,
            routes: [
                { key: '1', title: "SIGN IN" },
                { key: '2', title: "SIGN UP" }
            ]
        }
    }

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => <TabBar pressColor="#fff" tabStyle={{ backgroundColor: "#3F81F1" }} indicatorStyle={{ backgroundColor: "green", borderBottomWidth: 2, borderColor: "#fff" }} {...props} />;

    _renderScene = SceneMap({
        '1': SigninTab,
        '2': SignupTab
    });
    render() {
        return (
            <View style={AuthStyles.container}>
                <View style={AuthStyles.Header}>
                    <View style={AuthStyles.HeaderLogoContainer}>
                        <View style={{}}>
                            <Image source={require('./../../Resourses/Logo.png')} style={AuthStyles.LogoImage} opacity={0.4} />
                            <Text style={AuthStyles.LogoText}>LOGO</Text>
                        </View>
                    </View>
                </View>

                <TabViewAnimated
                    style={AuthStyles.Tabs}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onIndexChange={this._handleIndexChange} />
            </View>
        );
    }
}

export default Signin;