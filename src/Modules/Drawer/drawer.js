import React, { Component } from 'react';
import { AllTab, GroupTab, PeopleTab } from '../';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import {
    Icon,
    Button
} from 'react-native-elements';
import { Scene, TabViewAnimated, SceneMap, TabBar } from 'react-native-tab-view';

import { DrawerStyles } from './drawerStyles';
import { blue } from '../../Constants/color';

export class AppDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'all', title: 'ALL' },
                { key: 'people', title: 'PEOPLE' },
                { key: 'groups', title: 'GROUPS' },
            ],
        }
    }

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => <TabBar {...props} style={{ backgroundColor: blue }} indicatorStyle={{ backgroundColor: 'white' }} />;

    _renderScene = SceneMap({
        all: AllTab,
        people: PeopleTab,
        groups: GroupTab,
    });
    render() {
        return (
            <View style={DrawerStyles.drawerContainer}>
                <View style={DrawerStyles.drawerHeader}>
                    <Text style={DrawerStyles.drawerHeaderText}>Send Invitation</Text>
                </View>

                <TabViewAnimated
                    style={DrawerStyles.TabContainer}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onIndexChange={this._handleIndexChange}
                />
                <Button
                    title="Send"
                    buttonStyle={DrawerStyles.drawerSendButton}
                    color={blue}
                />
                <View style={DrawerStyles.drawerFooter}>
                    <TouchableOpacity>
                        <View style={DrawerStyles.drawerFooterAddButton}>
                            <Icon
                                name="add-circle-outline"
                                color="white"
                                containerStyle={DrawerStyles.drawerFooterAddIcon}
                            />
                            <Text style={DrawerStyles.drawerFooterAddText}>Add User</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}