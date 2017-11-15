import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {
    List,
    ListItem,
} from 'react-native-elements';

import SelectListIcon from '../../../Common/SelectListIcon';
import { UserList } from '../../../Constants/users';
import { blue } from '../../../Constants/color';


export class AllTab extends Component {
	constructor(props) {
        super(props);
        this.state = {
            peoples: UserList,
        }
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <List containerStyle={{ marginBottom: '40%' }}>
                        {
                            this.state.peoples.map((list, index) => (
                                <TouchableOpacity key={index}>
                                    <ListItem
                                        roundAvatar
                                        avatar={{ uri: list.avatar_url }}
                                        key={index}
                                        title={list.name}
                                        titleStyle={{ color: blue }}
                                        rightIcon={<SelectListIcon />}
                                        wrapperStyle={{ display: 'flex', alignItems: 'center' }}
                                    >
                                    </ListItem>
                                </TouchableOpacity>
                            ))
                        }
                    </List>
                </ScrollView>
            </View>
        );
    }
}
