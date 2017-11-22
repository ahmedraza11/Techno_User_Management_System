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
    PeopleTab,
    Jobs,
    PendingJobs
} from '../Modules';

const drawNavigator = DrawerNavigator(
    {
        dashboard: { screen: Dashboard }
    },
    {
        contentComponent: () => {
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

drawNavigator.navigationOptions = {
    header: null
}

export const AppNavigation = StackNavigator(
    {
        tabs: { screen: Tabs },
        dashboardScreen: { screen: Dashboard },
        appDrawer: { screen: drawNavigator },
        jobsScreen: { screen: Jobs },
        pendingJobScreen: { screen: PendingJobs }
    },
    {
        initialRouteName: 'tabs',
        headerMode: 'screen'
    }
);
