import React, { Component } from 'react';
import { DashboardStyles } from './dashboardStyles';
import { blue } from '../../Constants/color';
import {
    View, Text
} from 'react-native';

import {
    Header
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
            </View>
        );
    }
}
