import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Picker } from 'react-native';
import { Header, Avatar, Button } from 'react-native-elements';
import { AddUserStyles } from './addUserStyles';

export class AddUser extends Component {
    constructor() {
        super();
        this.state = {
            language: ''
        }
    }
    static navigationOptions = {
        header: null,
    }
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={AddUserStyles.container}>
                <Header
                    leftComponent={{ icon: 'keyboard-arrow-left', color: '#4081F2', onPress: () => goBack() }}
                    centerComponent={{ text: 'Add User ', style: AddUserStyles.header_title }}
                    rightComponent={{ icon: 'more-vert', color: '#4081F2' }}
                    outerContainerStyles={{ backgroundColor: 'white' }}
                />
                <View style={AddUserStyles.mainContainer}>

                    <ScrollView contentContainerStyle={AddUserStyles.TextFieldMainContainer} keyboardShouldPersistTaps='handled'>
                        <View style={AddUserStyles.TextFieldContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Name</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} />
                        </View>
                        <View style={AddUserStyles.TextFieldContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Father Name</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} />
                        </View>
                        <View style={AddUserStyles.TextFieldContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Nick Name</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} />
                        </View>
                        <View style={AddUserStyles.TextFieldContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Address</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} multiline={true} numberOfLines={3} />
                        </View>
                        <View style={AddUserStyles.TextFieldContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Username</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} />
                        </View>
                        <View style={AddUserStyles.TextFieldContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Password</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} secureTextEntry={true} />
                        </View>
                        <View style={AddUserStyles.TextFieldContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Lan IP</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} keyboardType="phone-pad" />
                        </View>
                        <View style={AddUserStyles.TextFieldContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Switcher Name</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} />
                        </View>
                        <View style={AddUserStyles.TextFieldContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Mobile No</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} keyboardType="phone-pad" />
                        </View>
                        <View style={AddUserStyles.TextFieldContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Date</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} keyboardType="phone-pad" />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', marginLeft: 36 }}>
                            <Text style={AddUserStyles.TextFieldTitle}>Packages</Text>
                            <Picker
                                selectedValue={this.state.language}
                                style={{ width: 200, color: '#4081F2' }}
                                onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                                <Picker.Item label="1 MB" value="1 MB" />
                                <Picker.Item label="2 MB" value="2 MB" />
                                <Picker.Item label="4 MB" value="4 MB" />
                                <Picker.Item label="8 MB" value="8 MB" />
                            </Picker>
                        </View>
                        <View style={AddUserStyles.TextFieldContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Fees</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} keyboardType="phone-pad" />
                        </View>
                    </ScrollView>
                </View>
                <View style={{ marginBottom: 5 }}>
                    <Button raised title="Save" backgroundColor="#4081F2" />
                </View>
            </View >
        )
    }
}
