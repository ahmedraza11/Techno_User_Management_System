import React, { Component } from 'react';
import { DashboardStyles } from './dashboardStyles';
import { blue } from '../../Constants/color';
import {
    View,
    Text,
    Switch,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import {
    Header,
    Button,
    CheckBox,
    Icon
} from 'react-native-elements';

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }
    static navigationOptions = {
        header: null,
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={DashboardStyles.main_container}>
                <Header
                    leftComponent={{ icon: 'sort', color: blue, onPress: () => navigate('DrawerOpen') }}
                    centerComponent={{ text: 'Dashboard', style: DashboardStyles.header_title }}
                    rightComponent={{ icon: 'more-vert', color: blue }}
                    outerContainerStyles={{ backgroundColor: 'white' }}
                />

                <View style={{ marginTop: 70 }}>
                    <ScrollView contentContainerStyle={{ width: '100%', padding: 20, display: 'flex', flexGrow: 1, flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                        <TouchableOpacity style={[DashboardStyles.DashboardItems, { backgroundColor: '#0984e3' }]} onPress={() => navigate('addUserScreen')}>
                            <View style={DashboardStyles.DashBoardIconContainer}>
                                <Icon name="person-add" color={'#fff'} size={45} />
                                <Text style={DashboardStyles.DashboardItemsText}>Add User</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[DashboardStyles.DashboardItems, { backgroundColor: '#6c5ce7' }]}>
                            <View style={DashboardStyles.DashBoardIconContainer}>
                                <Icon name="monetization-on" color={'#fff'} size={45} />
                                <Text style={DashboardStyles.DashboardItemsText}>Fees Entry</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[DashboardStyles.DashboardItems, { backgroundColor: '#d63031' }]}>
                            <View style={DashboardStyles.DashBoardIconContainer}>
                                <Icon name="person-pin" color={'#fff'} size={45} />
                                <Text style={DashboardStyles.DashboardItemsText}>Users</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[DashboardStyles.DashboardItems, { backgroundColor: '#00b894' }]}>
                            <View style={DashboardStyles.DashBoardIconContainer}>
                                <Icon name="report" color={'#fff'} size={45} />
                                <Text style={DashboardStyles.DashboardItemsText}>Complains</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[DashboardStyles.DashboardItems, { backgroundColor: '#ff793f' }]}>
                            <View style={DashboardStyles.DashBoardIconContainer}>
                                <Icon name="group" color={'#fff'} size={45} />
                                <Text style={DashboardStyles.DashboardItemsText}>Recovery Team</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[DashboardStyles.DashboardItems, { backgroundColor: '#b71540' }]}>
                            <View style={DashboardStyles.DashBoardIconContainer}>
                                <Icon name="power-settings-new" color={'#fff'} size={45} />
                                <Text style={DashboardStyles.DashboardItemsText}>Logout</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>


            </View>
        );
    }
}
