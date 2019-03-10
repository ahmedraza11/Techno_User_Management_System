import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Picker } from 'react-native';
import { AddUserStyles } from './addUserStyles';

import { Header, Avatar, Button, Icon } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Realm from 'realm';
// import { AdminSchema, UserSchema, queryAllUsers, insertNewUser, USER_SCHEMA } from './../../Constants/AllSchema';


export class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDatePickerModelOpen: false,
            name: '',
            fatherName: '',
            nickName: '',
            address: '',
            username: '',
            password: '',
            lanIP: '',
            switcherName: '',
            mobileNo: '',
            selectedDate: '',
            Packages: '',
            Fees: '',
            realm: null
        }
    }

    handleSaveButton() {
        const { name, fatherName, nickName, username, password, lanIP, address, mobileNo, selectedDate, Packages, Fees, switcherName } = this.state;
        const UserSchema = {
            name: "UserSchema",
            primaryKey: 'id',
            properties: {
                id: 'string',
                name: { type: 'string' },
                fatherName: { type: 'string' },
                nickName: { type: 'string' },
                address: { type: 'string' },
                username: { type: 'string' },
                password: { type: 'string' },
                lanIP: { type: 'string' },
                switcherName: { type: 'string' },
                mobileNumber: { type: 'string' },
                creationDate: { type: 'string' },
                package: { type: 'string' },
                fees: { type: 'string' },
                feeHistory: { type: 'string' },
                status: { type: 'bool' }
            }
        }
        const userObj = {
            id: Math.floor(Date.now() / 1000 * 3).toString(),
            name: "name",
            fatherName: "fatherName",
            nickName: "nickName",
            address: "address",
            username: "username",
            password: "password",
            lanIP: "lanIP",
            switcherName: "switcherName",
            mobileNo: "mobileNo",
            creationDate: "selectedDate",
            package: "Packages",
            fees: "Fees",
            feeHistory: "asdf",
            status: true
        }
        Realm.open(UserSchema).then(realm => {
            realm.write(() => {
                realm.create("UserSchema", userObj);
            })
        })
        // insertNewUser(userObj);
        console.log(userObj);
    }

    _showDateTimePicker = () => this.setState({ isDatePickerModelOpen: true });
    _hideDateTimePicker = () => this.setState({ isDatePickerModelOpen: false });

    _handleDateTimePicker(date) {
        this.setState({
            selectedDate: date.toString()
        })
        console.log("Date---------", date);
        this._hideDateTimePicker();
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
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} onChangeText={(data) => this.setState({ name: data })} />
                        </View>
                        <View style={AddUserStyles.TextFieldContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Father Name</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} onChangeText={(data) => this.setState({ fatherName: data })} />
                        </View>
                        <View style={AddUserStyles.TextFieldContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Nick Name</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} onChangeText={(data) => this.setState({ nickName: data })} />
                        </View>
                        <View style={AddUserStyles.TextFieldContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Address</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} onChangeText={(data) => this.setState({ address: data })} multiline={true} numberOfLines={3} />
                        </View>
                        <View style={AddUserStyles.TextFieldContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Username</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} onChangeText={(data) => this.setState({ username: data })} />
                        </View>
                        <View style={AddUserStyles.TextFieldContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Password</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} onChangeText={(data) => this.setState({ password: data })} />
                        </View>
                        <View style={AddUserStyles.TextFieldContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Lan IP</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} onChangeText={(data) => this.setState({ lanIP: data })} keyboardType="phone-pad" />
                        </View>
                        <View style={AddUserStyles.TextFieldContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Switcher Name</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} onChangeText={(data) => this.setState({ switcherName: data })} />
                        </View>
                        <View style={AddUserStyles.TextFieldContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Mobile No</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} onChangeText={(data) => this.setState({ mobileNo: data })} keyboardType="phone-pad" />
                        </View>
                        <View style={[AddUserStyles.TextFieldContainer, AddUserStyles.DatePickerContainer]}>
                            <TouchableOpacity onPress={() => this._showDateTimePicker()}>
                                <Icon name="date-range" style={AddUserStyles.DatePickerIconStyles} color={'#4081F2'} size={35} />
                            </TouchableOpacity>
                            <Text style={AddUserStyles.SelectedDateText}>
                                {this.state.selectedDate == "" ?
                                    "Select Date" :
                                    this.state.selectedDate.slice(0, 16)}
                            </Text>
                            <DateTimePicker
                                isVisible={this.state.isDatePickerModelOpen}
                                onConfirm={(date) => this._handleDateTimePicker(date)}
                                onCancel={() => this._hideDateTimePicker()}
                            />
                        </View>
                        <View style={AddUserStyles.PackagePickerContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Packages</Text>
                            <Picker
                                selectedValue={this.state.Packages}
                                style={{ width: 200, color: '#4081F2' }}
                                onValueChange={(itemValue, itemIndex) => this.setState({ Packages: itemValue })}>
                                <Picker.Item label="1 MB" value="1 MB" />
                                <Picker.Item label="2 MB" value="2 MB" />
                                <Picker.Item label="4 MB" value="4 MB" />
                                <Picker.Item label="8 MB" value="8 MB" />
                            </Picker>
                        </View>
                        <View style={AddUserStyles.TextFieldContainer}>
                            <Text style={AddUserStyles.TextFieldTitle}>Fees</Text>
                            <TextInput underlineColorAndroid="#7AABFF" style={AddUserStyles.TextField} onChangeText={(data) => this.setState({ Fees: data })} keyboardType="phone-pad" />
                        </View>
                    </ScrollView>
                </View>
                <View style={{ marginBottom: 5 }}>
                    <Button raised title="Save" onPress={() => this.handleSaveButton()} backgroundColor="#4081F2" />
                </View>
            </View >
        )
    }
}
