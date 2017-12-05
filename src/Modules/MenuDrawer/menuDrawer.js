import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MenuDrawerStyle } from './menuDrawerStyles';
import { Avatar } from 'react-native-elements';
export class MenuDrawer extends Component {
    render() {
        const {navigate} = this.props;
        return (
            <View style={MenuDrawerStyle.mainContainer}>
                <View style={MenuDrawerStyle.Header}>
                    <View>
                        <View style={MenuDrawerStyle.userInfo}>
                            <Avatar
                                rounded
                                large
                                source={require('../../Resourses/avatar.jpg')}
                                activeOpacity={0.7}
                            />
                            <Text style={MenuDrawerStyle.userName}>Adam Sandman</Text>
                            <Text style={MenuDrawerStyle.userBalance}>$2000.00</Text>
                            <Text style={MenuDrawerStyle.balanceText}>Balance</Text>
                        </View>
                    </View>
                </View>
                <View style={MenuDrawerStyle.Content}>
                    <ScrollView style={MenuDrawerStyle.Menu} showsVerticalScrollIndicator={false}>

                        <TouchableOpacity>
                            <View style={MenuDrawerStyle.MenuItemContainer}>
                                <Image source={require('./../../Resourses/hamburger_menu_icons/home_icon_hdpi.png')} />
                                <Text style={MenuDrawerStyle.MenuItem}>Home</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={MenuDrawerStyle.MenuItemContainer}>
                                <Image source={require('./../../Resourses/hamburger_menu_icons/new_job_icon_hdpi.png')} />
                                <Text style={MenuDrawerStyle.MenuItem}>New Job</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={MenuDrawerStyle.MenuItemContainer}>
                                <Image style={{ width: 21, height: 21 }} source={require('./../../Resourses/hamburger_menu_icons/briefcase.png')} />
                                <Text style={MenuDrawerStyle.MenuItem}>My Job</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={MenuDrawerStyle.MenuItemContainer}>
                                <Image source={require('./../../Resourses/hamburger_menu_icons/schedule_icon_hdpi.png')} />
                                <Text style={MenuDrawerStyle.MenuItem}>Schedule</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={MenuDrawerStyle.MenuItemContainer}>
                                <Image source={require('./../../Resourses/hamburger_menu_icons/users_icon_hdpi.png')} />
                                <Text style={MenuDrawerStyle.MenuItem}>Users</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={MenuDrawerStyle.MenuAngularItemContainer}>
                                <Image source={require('./../../Resourses/hamburger_menu_icons/Next_Icon_hdpi.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigate('settingScreen')} >
                            <View style={MenuDrawerStyle.MenuItemContainer}>
                                <Image source={require('./../../Resourses/hamburger_menu_icons/setings_icon_hdpi.png')} />
                                <Text style={MenuDrawerStyle.MenuItem}>Settings</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={MenuDrawerStyle.MenuAboutItemContainer}>
                                <Image source={require('./../../Resourses/hamburger_menu_icons/about_icon_hdpi.png')} />
                                <Text style={MenuDrawerStyle.MenuItem}>About</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        )
    }
}