import React, { Component } from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import { ScrollView, View, Text } from "react-native";
import SplashScreen from 'react-native-splash-screen'
import {
    Signup,
    Signin,
    Dashboard,
    AppDrawer,
    AllTab,
    GroupTab,
    PeopleTab,
    Jobs,
    PendingJobs,
    Setting,
    Users
} from '../Modules';

function toggleDrawer(state) {
}

const drawNavigator = DrawerNavigator(
    {
        dashboard: { screen: Dashboard }
    },
    {
        contentComponent: ({ navigation }) => {
            return (
                <View>
                    <AppDrawer navigation={navigation} />
                </View>
            );
        }
    }
);

export const Tabs = TabNavigator(
    {
        Signin: { screen: Signin },
        // Signup: { screen: Signup },
    },
    {
        tabBarPosition: 'top',
        animationEnabled: true,
        tabBarOptions: {
            // tinColor: '#fff',
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
        signinScreen: { screen: Signin },
        dashboardScreen: { screen: Dashboard },
        appDrawer: { screen: drawNavigator },
        jobsScreen: { screen: Jobs },
        pendingJobScreen: { screen: PendingJobs },
        settingScreen: { screen: Setting },
        usersScreen: {screen: Users}

    },
    {
        initialRouteName: 'signinScreen',
        headerMode: 'screen'
    }
);
