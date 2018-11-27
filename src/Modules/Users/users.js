import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { usersStyles } from './usersStyles';
import { ActiveUsers, InactiveUsers } from './Tabs';

import { Header } from 'react-native-elements';
import { TabBar, SceneMap, TabViewAnimated } from 'react-native-tab-view';

export class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'activeUsers', title: 'Active Users' },
                { key: 'inactiveUsers', title: 'Inactive Users' },
            ],
        }
    }

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => (
        <View style={{ width: '100%', backgroundColor: 'white' }}>
            <TabBar labelStyle={{ fontSize: 10, color: '#4081F2', marginLeft: 0, marginRight: 0 }} indicatorStyle={{ backgroundColor: '#4081F2' }} style={{ backgroundColor: 'white' }} {...props} />
        </View>
    );

    _renderScene = SceneMap({
        activeUsers: ActiveUsers,
        inactiveUsers: InactiveUsers,
    });

    static navigationOptions = {
        header: null
    }

    render() {
        const { goBack } = this.props.navigation;
        return (
            <View style={{ backgroundColor: '#fff', display: 'flex', flex: 1 }}>
                <Header
                    leftComponent={{ icon: 'keyboard-arrow-left', color: '#4081F2', onPress: () => goBack() }}
                    centerComponent={{ text: 'Users', style: usersStyles.header_title }}
                    rightComponent={{ icon: 'more-vert', color: '#4081F2' }}
                    outerContainerStyles={{ backgroundColor: 'white' }}
                />
                <View style={{ width: '100%', flex: 1, marginTop: 70 }}>
                    <TabViewAnimated
                        style={usersStyles.TabViewInnerContainer}
                        navigationState={this.state}
                        renderScene={this._renderScene}
                        renderHeader={this._renderHeader}
                        onIndexChange={this._handleIndexChange}
                    />
                </View>
            </View>

        )
    }
}
