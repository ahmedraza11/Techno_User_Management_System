import React, { Component } from 'react';
import { blue } from '../../Constants/color';
import { JobsStyles } from './jobsStyles';
import {
    View,
    Text
} from 'react-native';
import { Balance, NewJob, ViewJob } from './Tabs';

import { Scene, TabViewAnimated, SceneMap, TabBar } from 'react-native-tab-view';
import {
    Header,
    Avatar,
    Button
} from 'react-native-elements';


const HeaderAvatar = () => {
    return (
        <View>
            <Avatar
                small
                rounded
                source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
            />
        </View>
    )
}

export class Jobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'balance', title: 'BALANCE' },
                { key: 'newJob', title: 'NEW JOB' },
                { key: 'viewJob', title: 'VIEW JOB' },
            ],
        }
    }

    static navigationOptions = {
        header: null
    }

    _handleIndexChange = index => this.setState({ index });


    _renderHeader = props => <TabBar {...props} style={{ borderWidth: 0, backgroundColor: 'white',marginTop:70 }}  labelStyle={{color: '#4081F2',fontWeight: 'bold'}} indicatorStyle={{ backgroundColor: '#4081F2' }} />;

    _renderScene = SceneMap({
        balance: Balance,
        newJob: NewJob,
        viewJob: ViewJob,
    });
    render() {

        return (
            <View style={{display: 'flex',flex: 1}}>
               <Header
                    leftComponent={<HeaderAvatar/>}
                    centerComponent={{ text: 'Adam Sandman', style: JobsStyles.header_title }}
                    rightComponent={{ icon: 'more-vert', color: blue }}
                    outerContainerStyles={{ backgroundColor: 'white' }}
                 />
                <TabViewAnimated
                    style={JobsStyles.TabContainer}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onIndexChange={this._handleIndexChange}
                />
                 
            </View>
                
        );
    }
}
