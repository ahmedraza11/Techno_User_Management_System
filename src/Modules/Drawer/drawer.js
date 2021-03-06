import React, { Component } from 'react';
import { AllTab, GroupTab, PeopleTab, MenuDrawer } from '../';
import { DrawerStyles } from './drawerStyles';
import { blue } from '../../Constants/color';
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
        const { navigate } = this.props.navigation;
        return (
            ////``````````First Drawer```````````/////////
            
            // <View style={DrawerStyles.drawerContainer}>
            //     <View style={DrawerStyles.drawerHeader}>
            //         <Text style={DrawerStyles.drawerHeaderText}>Send Invitation</Text>
            //     </View>

            //     <TabViewAnimated
            //         style={DrawerStyles.TabContainer}
            //         navigationState={this.state}
            //         renderScene={this._renderScene}
            //         renderHeader={this._renderHeader}
            //         onIndexChange={this._handleIndexChange}
            //     />
            //     <Button
            //         title="Send"
            //         buttonStyle={DrawerStyles.drawerSendButton}
            //         containerViewStyle={{ zIndex: 9999, position: 'absolute', bottom: '9%', width: '90%' }}
            //         color={blue}
            //         textStyle={{ color: blue }}
            //         raised
            //         backgroundColor={'#fff'}
            //     />
            //     <View style={DrawerStyles.drawerFooter}>
            //         <TouchableOpacity>
            //             <View style={DrawerStyles.drawerFooterAddButton}>
            //                 <Icon
            //                     name="add-circle-outline"
            //                     color="white"
            //                     containerStyle={DrawerStyles.drawerFooterAddIcon}
            //                 />
            //                 <Text style={DrawerStyles.drawerFooterAddText}>Add User</Text>
            //             </View>
            //         </TouchableOpacity>
            //     </View>
            // </View>

            ////``````````Second Drawer```````````/////////

            <MenuDrawer navigate={navigate}/>
        )
    }
}