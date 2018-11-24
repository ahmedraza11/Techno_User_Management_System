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
    CheckBox
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
                        <TouchableOpacity style={[DashboardStyles.DashboardItems, { backgroundColor: '#0984e3' }]}>
                        </TouchableOpacity>

                        <TouchableOpacity style={[DashboardStyles.DashboardItems, { backgroundColor: '#6c5ce7' }]}>
                        </TouchableOpacity>

                        <TouchableOpacity style={[DashboardStyles.DashboardItems, { backgroundColor: '#d63031' }]}>
                        </TouchableOpacity>

                        <TouchableOpacity style={[DashboardStyles.DashboardItems, { backgroundColor: '#00b894' }]}>
                        </TouchableOpacity>

                        <TouchableOpacity style={[DashboardStyles.DashboardItems, { backgroundColor: '#ff793f' }]}>
                        </TouchableOpacity>

                        <TouchableOpacity style={[DashboardStyles.DashboardItems, { backgroundColor: '#b71540' }]}>
                        </TouchableOpacity>

                        <TouchableOpacity style={[DashboardStyles.DashboardItems, { backgroundColor: 'red' }]}>
                        </TouchableOpacity>

                        <TouchableOpacity style={[DashboardStyles.DashboardItems, { backgroundColor: 'red' }]}>
                        </TouchableOpacity>
                    </ScrollView>
                </View>


            </View>
        );
    }
}
