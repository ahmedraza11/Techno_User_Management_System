import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView
} from 'react-native';
import { NewJobStyles } from './newJobStyles';

import {
    Button
} from 'react-native-elements';

export class NewJob extends Component {
    render() {
        return (
            <View style={{display: 'flex',flexDirection: 'column',justifyContent: 'space-between'}}>

                <ScrollView>
                    <View style={NewJobStyles.container}>
                        <View style={NewJobStyles.FieldArea}>
                            <View style={NewJobStyles.Roler}>
                                <View>
                                    <Text style={NewJobStyles.ID}>Job ID</Text>
                                    <TextInput underlineColorAndroid="transparent" placeholder="Mobile UX" placeholderTextColor="#A6C3F6" style={NewJobStyles.TextField} value="Mobile UX Des|" />
                                </View>
                                <View style={NewJobStyles.FieldContainer}>
                                    <Text style={NewJobStyles.ID}>Job Description</Text>
                                    <TextInput underlineColorAndroid="transparent" placeholder="Your Description" placeholderTextColor="#A6C3F6" style={NewJobStyles.TextField} />
                                </View>
                                <View style={NewJobStyles.FieldContainerAddress}>
                                    <Text style={NewJobStyles.AdressID}>Address</Text>
                                    <TextInput underlineColorAndroid="transparent" placeholder="Your Address" placeholderTextColor="#A6C3F6" style={NewJobStyles.AddressTextField} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={NewJobStyles.CustomerArea}>
                            <View style={NewJobStyles.Roler}>
                                <View style={NewJobStyles.FieldContainer}>
                                    <Text style={NewJobStyles.TextFieldHeading}>Customer Name</Text>
                                    <TextInput underlineColorAndroid="transparent" placeholder="Your Name" placeholderTextColor="#A6C3F6" value="Mia Mckenzie" style={NewJobStyles.CustomerTextField} />
                                </View>
                                <View style={NewJobStyles.FieldContainerRow}>
                                    <Text style={NewJobStyles.TextFieldHeadingPhoneNum}>Phone Number</Text>
                                    <TextInput underlineColorAndroid="transparent" placeholder="+1 xxx xxx xxx" placeholderTextColor="#A6C3F6" style={NewJobStyles.PhoneNumTextField} />
                                </View>
                                <View style={NewJobStyles.FieldContainerRow}>
                                    <Text style={NewJobStyles.TextFieldHeadingPhoneNum}>Percentage</Text>
                                    <TextInput underlineColorAndroid="transparent" placeholder="40% - 60%" placeholderTextColor="#A6C3F6" style={NewJobStyles.PhoneNumTextField} />
                                </View>
                            </View>
                        </View>
                        <View style={NewJobStyles.DestinationArea}>
                            <View style={NewJobStyles.Roler}>
                                <View style={NewJobStyles.FieldContainer}>
                                    <Text style={NewJobStyles.TextFieldHeading}>Time To Destination</Text>
                                    <View style={NewJobStyles.DestinationTimeTextFieldContainer}>
                                        <TextInput underlineColorAndroid="transparent" placeholder="Dy" placeholderTextColor="#A6C3F6" style={NewJobStyles.DestinationTextField} />
                                        <Text style={NewJobStyles.DestinationTextFieldSlash}> / </Text>
                                        <TextInput underlineColorAndroid="transparent" placeholder="Mh" placeholderTextColor="#A6C3F6" style={NewJobStyles.DestinationTextField} />
                                        <Text style={NewJobStyles.DestinationTextFieldSlash}> / </Text>
                                        <TextInput underlineColorAndroid="transparent" placeholder="Yr" value="18" placeholderTextColor="#A6C3F6" style={NewJobStyles.DestinationTextField} />

                                        <View style={NewJobStyles.DestinationTimeContainer}>
                                            <TextInput underlineColorAndroid="transparent" placeholder="H" placeholderTextColor="#A6C3F6" style={NewJobStyles.DestinationTextField} />
                                            <Text style={NewJobStyles.DestinationTextFieldColon}>:</Text>
                                            <TextInput underlineColorAndroid="transparent" placeholder="M" placeholderTextColor="#A6C3F6" style={NewJobStyles.DestinationTextField} />
                                        </View>
                                    </View>
                                    <View style={NewJobStyles.DestinationMileageTextFieldContainer}>
                                        <Text style={NewJobStyles.TextFieldHeading}>Mileage To Destination</Text>
                                        <View style={NewJobStyles.MileageContainer}>
                                            <Text style={NewJobStyles.MileageContainerHeading}>Less then</Text>
                                            <TextInput underlineColorAndroid="transparent" placeholder="2" placeholderTextColor="#A6C3F6" style={NewJobStyles.MileageTextField} />
                                            <Text style={NewJobStyles.MileageContainerHeading}>Km</Text>
                                            <TextInput underlineColorAndroid="transparent" placeholder="500" placeholderTextColor="#A6C3F6" style={NewJobStyles.MileageTextField} />
                                            <Text style={NewJobStyles.MileageContainerHeading}>M</Text>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        </View>
                        <View style={NewJobStyles.NoteArea}>
                            <View style={NewJobStyles.Roler}>
                                <Text style={NewJobStyles.TextFieldHeading}>Note</Text>
                                <TextInput multiline={true} underlineColorAndroid="transparent" placeholder="Your Note" placeholderTextColor="#A6C3F6" style={NewJobStyles.NoteTextField} />
                            </View>
                        </View>
                    </View>
                <View style={{ width: '100%',flexGrow:1, height: 60, padding: 5,zIndex: 17, backgroundColor: 'white',alignItems: 'center',  display: 'flex', alignSelf: 'flex-end' }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Button title="Save" color="#4081F2" buttonStyle={{ backgroundColor: 'white', width: 120 }} />
                        <Button title="Forward" color="white" buttonStyle={{ backgroundColor: '#4081F2', width: 120 }} />
                    </View>
                </View>
                </ScrollView>
            </View>
        );
    }
}