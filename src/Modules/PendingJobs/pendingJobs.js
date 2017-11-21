import React, { Component } from 'react';
import { PendingJobsStyles } from './pendingJobsStyles';
import { blue } from '../../Constants/color';
import { AwaitingResponse, ViewBy } from '../';
import { View, Text } from 'react-native';

import { Header, Button } from 'react-native-elements';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

export class PendingJobs extends Component {
    static navigationOptions = {
        header: null,
    }
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'viewBy', title: 'View By' },
                { key: 'awaitingResponse', title: 'Awaiting Response' },
            ],
        }
    }

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => (
        <View style={{ width: '100%', backgroundColor: 'white' }}>
            <TabBar labelStyle={{ fontSize: 10, color: '#4081F2', marginLeft: 0, marginRight: 0 }} indicatorStyle={{ backgroundColor: '#4081F2' }} style={{ backgroundColor: 'white' }} tabStyle={{ width: 125 }} {...props} />
        </View>
    );

    _renderScene = SceneMap({
        viewBy: ViewBy,
        awaitingResponse: AwaitingResponse,
    });


    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={{ display: 'flex', flex: 1 }}>

                <Header
                    leftComponent={{ icon: 'keyboard-arrow-left', color: blue, onPress: () => goBack() }}
                    centerComponent={{ text: 'Pending Job ', style: PendingJobsStyles.header_title }}
                    rightComponent={{ icon: 'more-vert', color: blue }}
                    outerContainerStyles={{ backgroundColor: 'white' }}
                />
                <View style={PendingJobsStyles.mainContainer}>
                    <View style={PendingJobsStyles.Banner}>
                        <View style={PendingJobsStyles.BannerInnerContainer}>
                            <Text style={PendingJobsStyles.BannerTitle}>Bring me a cup of tea</Text>
                            <View style={PendingJobsStyles.BannerSubTitleContainer}>
                                <Text style={PendingJobsStyles.BannerSubTitle}>Approve By Jack Q 31.10.2017</Text>
                                <Text style={PendingJobsStyles.BannerSubTitle}>Job ID: 123d456Ia</Text>
                            </View>
                            <Button title="Job Details" containerViewStyle={{marginLeft:0}} backgroundColor="#4081F2" buttonStyle={PendingJobsStyles.BannerButton} />
                        </View>
                    </View>
                </View>
                <View style={PendingJobsStyles.TabViewMainContainer}>
                    <TabViewAnimated
                        style={PendingJobsStyles.TabViewInnerContainer}
                        navigationState={this.state}
                        renderScene={this._renderScene}
                        renderHeader={this._renderHeader}
                        onIndexChange={this._handleIndexChange}
                    />
                </View>

            </View>

        );
    }
}
