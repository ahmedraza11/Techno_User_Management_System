import React, { Component } from 'react';
import { DashboardStyles } from './dashboardStyles';
import { blue } from '../../Constants/color';
import {
    View,
    Text
} from 'react-native';

import {
    Header,
    Button
} from 'react-native-elements';

export class Dashboard extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Header
                    leftComponent={{ icon: 'sort', color: blue, onPress: () => navigate('DrawerOpen') }}
                    centerComponent={{ text: 'Dashboard', style: DashboardStyles.header_title }}
                    rightComponent={{ icon: 'more-vert', color: blue }}
                    outerContainerStyles={{ backgroundColor: 'white' }}
                />
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', height: 550,width:'100%', alignItems: 'center' }}>
                    <Button title="Jobs Screen" onPress={() => navigate('jobsScreen')} buttonStyle={{ display: 'flex', backgroundColor: "#4081F2" }} />
                    <Button title="Pending Job Screen" onPress={() => navigate('pendingJobScreen')} buttonStyle={{ display: 'flex', backgroundColor: '#19A35E' }} />
                </View>
            </View>
        );
    }
}
