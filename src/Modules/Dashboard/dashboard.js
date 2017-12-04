import React, { Component } from 'react';
import { DashboardStyles } from './dashboardStyles';
import { blue } from '../../Constants/color';
import {
    View,
    Text,
    Switch
} from 'react-native';

import {
    Header,
    Button,
    CheckBox
} from 'react-native-elements';

export class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            checked: false
        }
    }
    static navigationOptions = {
        header: null,
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={DashboardStyles.main_container}>
                <Header
                    leftComponent={{ icon: 'sort', color: blue, onPress: () => navigate('DrawerOpen') }}
                    centerComponent={{ text: 'Dashboard', style: DashboardStyles.header_title }}
                    rightComponent={{ icon: 'more-vert', color: blue }}
                    outerContainerStyles={{ backgroundColor: 'white' }}
                />
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around',flexWrap: 'wrap',alignItems:'center', height: 550,marginTop:250, width: '100%', alignItems: 'center' }}>
                    <Button title="Jobs Screen" onPress={() => navigate('jobsScreen')} buttonStyle={{ display: 'flex', backgroundColor: "#4081F2" }} />
                    <Button title="Pending Job Screen" onPress={() => navigate('pendingJobScreen')} buttonStyle={{ display: 'flex', backgroundColor: '#19A35E' }} />
                    <CheckBox
                        center
                        title='Change Drawer'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={()=>this.setState({checked: !this.state.checked})}
                        checked={this.state.checked}
                    />
                </View>
            </View>
        );
    }
}
