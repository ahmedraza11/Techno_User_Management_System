import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { UserList } from '../../../Constants/users';
import { blue } from '../../../Constants/color';

import {
    List,
    ListItem,
} from 'react-native-elements';

export class PeopleTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peoples: UserList,
            selected: false
        }
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <List containerStyle={{ marginBottom: 20 }}>
                        {
                            this.state.peoples.map((list, index) => (
                                <TouchableOpacity key={index}>
                                    <ListItem
                                        roundAvatar
                                        avatar={{ uri: list.avatar_url }}
                                        key={index}
                                        title={list.name}
                                        titleStyle={{ color: blue }}
                                        onPress={() => {
                                            list.selected = !list.selected;
                                            console.log(list.id ," Selected ", list.selected);
                                        }}
                                        rightIcon={(list.selected) ? { name: 'brightness-1', style: { color: blue, fontSize: 15 } } : { name: 'brightness-1', style: { color: '#E0E0E0', fontSize: 15 } }}
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
