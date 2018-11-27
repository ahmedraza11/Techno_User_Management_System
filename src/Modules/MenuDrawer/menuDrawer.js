import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MenuDrawerStyle } from './menuDrawerStyles';
import { Avatar } from 'react-native-elements';
export class MenuDrawer extends Component {
    render() {
        const { navigate } = this.props;
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
                            <Text style={MenuDrawerStyle.userName}>Waseem</Text>
                            {/* <Text style={MenuDrawerStyle.userBalance}>$2000.00</Text> */}
                            <Text style={MenuDrawerStyle.balanceText}>CEO Techo Net Cable</Text>
                        </View>
                    </View>
                </View>
                <View style={MenuDrawerStyle.Content}>
                    <ScrollView style={MenuDrawerStyle.Menu} showsVerticalScrollIndicator={false}>

                        <TouchableOpacity>
                            <View style={MenuDrawerStyle.MenuItemContainer}>
                                <Image source={require('./../../Resourses/hamburger_menu_icons/home_icon_hdpi.png')} />
                                <Text style={MenuDrawerStyle.MenuItem}>Dashboard</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('usersScreen')}>
                            <View style={MenuDrawerStyle.MenuItemContainer}>
                                <Image source={require('./../../Resourses/hamburger_menu_icons/new_job_icon_hdpi.png')} />
                                <Text style={MenuDrawerStyle.MenuItem}>Users</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={MenuDrawerStyle.MenuItemContainer}>
                                <Image source={require('./../../Resourses/hamburger_menu_icons/schedule_icon_hdpi.png')} />
                                <Text style={MenuDrawerStyle.MenuItem}>Complains</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={MenuDrawerStyle.MenuItemContainer}>
                                <Image source={require('./../../Resourses/hamburger_menu_icons/users_icon_hdpi.png')} />
                                <Text style={MenuDrawerStyle.MenuItem}>Expired / Balance</Text>
                            </View>
                        </TouchableOpacity>
                        {/* <TouchableOpacity>
                            <View style={MenuDrawerStyle.MenuAngularItemContainer}>
                                <Image source={require('./../../Resourses/hamburger_menu_icons/Next_Icon_hdpi.png')} />
                            </View>
                        </TouchableOpacity> */}
                        <TouchableOpacity onPress={() => navigate('settingScreen')} >
                            <View style={MenuDrawerStyle.MenuItemContainer}>
                                <Image source={require('./../../Resourses/hamburger_menu_icons/setings_icon_hdpi.png')} />
                                <Text style={MenuDrawerStyle.MenuItem}>Settings</Text>
                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </View>
        )
    }
}