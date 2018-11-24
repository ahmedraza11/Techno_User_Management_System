import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Header, Avatar, Button } from 'react-native-elements';
import { SettingStyle } from './settingStyles';

export class Setting extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={SettingStyle.container}>
                <Header
                    leftComponent={{ icon: 'keyboard-arrow-left', color: '#4081F2', onPress: () => goBack() }}
                    centerComponent={{ text: 'Setting ', style: SettingStyle.header_title }}
                    rightComponent={{ icon: 'more-vert', color: '#4081F2' }}
                    outerContainerStyles={{ backgroundColor: 'white' }}
                />
                <View style={SettingStyle.mainContainer}>
                    <View style={SettingStyle.AvatarContainer}>
                        <Avatar
                            rounded
                            large
                            source={require('./../../Resourses/avatar.jpg')}
                            overlayContainerStyle={{ borderWidth: 1, borderColor: 'black' }}
                            containerStyle={{ marginLeft: 30 }}
                        />
                        <TouchableOpacity>
                            <Image
                                source={require('./../../Resourses/upload_image.png')}
                                style={{ width: 50, height: 50, marginLeft: 20 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <ScrollView contentContainerStyle={SettingStyle.TextFieldMainContainer}>
                        <View style={SettingStyle.TextFieldContainer}>
                            <Text style={SettingStyle.TextFieldTitle}>Full Name</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={SettingStyle.TextField} />
                        </View>
                        <View style={SettingStyle.TextFieldContainer}>
                            <Text style={SettingStyle.TextFieldTitle}>Email</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={SettingStyle.TextField} keyboardType="email-address" />
                        </View>
                        <View style={SettingStyle.TextFieldContainer}>
                            <Text style={SettingStyle.TextFieldTitle}>Phone</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={SettingStyle.TextField} keyboardType="phone-pad" />
                        </View>
                        <View style={SettingStyle.TextFieldContainer}>
                            <Text style={SettingStyle.TextFieldTitle}>Password</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={SettingStyle.TextField} secureTextEntry={true} />
                        </View>
                        {/* <View style={SettingStyle.TextFieldContainer}>
                            <View style={SettingStyle.ImageTextFieldTitleContainer}>
                                <Image style={{ width: 34, height:21}} source={require('./../../Resourses/visa.png')} />
                                <Text style={SettingStyle.ImageTextFieldTitle}>VISA $</Text>
                            </View>
                            <TextInput underlineColorAndroid="#7AABFF" style={SettingStyle.TextField} value="70%" />
                        </View>
                        <View style={SettingStyle.TextFieldContainer}>
                            <View style={SettingStyle.ImageTextFieldTitleContainer}>
                                <Image style={{ width: 35, height:22}} source={require('./../../Resourses/chesk.png')} />
                                <Text style={SettingStyle.ImageTextFieldTitle}>CHESK $</Text>
                            </View>
                            <TextInput underlineColorAndroid="#7AABFF" style={SettingStyle.TextField}  value="20%"/>
                        </View>
                        <View style={SettingStyle.TextFieldContainer}>
                            <View style={SettingStyle.ImageTextFieldTitleContainer}>
                                <Image style={{ width: 34, height:26}}  source={require('./../../Resourses/cash.png')} />
                                <Text style={SettingStyle.ImageTextFieldTitle}>CASH $</Text>
                            </View>
                            <TextInput underlineColorAndroid="#7AABFF" style={SettingStyle.TextField}  value="10%"/>
                        </View> */}

                    </ScrollView>
                    <View style={{ marginBottom: 5 }}>
                        <Button raised title="Save" backgroundColor="#4081F2" />
                    </View>
                </View>
            </View>
        )
    }
}
