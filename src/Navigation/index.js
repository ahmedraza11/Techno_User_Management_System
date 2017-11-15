import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import { ScrollView, View, Text } from "react-native";
import {
    Signup,
    Signin,
    Dashboard,
    AppDrawer,
    AllTab,
    GroupTab,
    PeopleTab

} from '../Modules';

const drawNavigator = DrawerNavigator(
    {
        dashboard: { screen: Dashboard }
    },
    {
        contentComponent: props => {
            return (
                <View>
                    <AppDrawer />
                </View>
            );
        }
    }
);

export const Tabs = TabNavigator(
    {
        Signin: { screen: Signin },
        Signup: { screen: Signup },
    },

    {
        tabBarPosition: 'top',
        animationEnabled: true,
        tabBarOptions: {
            tinColor: '#fff',
            activeTintColor: '#fff',
            indicatorStyle: {
                backgroundColor: 'white'
            }
        },
    }
)

// export const DrawerTabs = TabNavigator(
//     {
//         allScreen: { screen: AllTab },
//         groupScreen: { screen: GroupTab },
//         peopleScreen: { screen: PeopleTab }
//     },
//     {
//         tabBarPosition: 'top',
//         animationEnabled: true,
//         tabBarOptions: {
//             tinColor: '#fff',
//             activeTintColor: '#fff',
//             indicatorStyle: {
//                 backgroundColor: 'white'
//             }
//         },
//     }
// )

drawNavigator.navigationOptions = {
    header: null
}

export const navigation = StackNavigator(
    {
        tabs: { screen: Tabs },
        // drawerTabs: { screen: DrawerTabs },
        dashboardScreen: { screen: Dashboard },
        appDrawer: { screen: drawNavigator }
    },
    {
        initialRouteName: 'appDrawer',
        headerMode: 'screen'
    }
);
