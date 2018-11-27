import React, { Component } from 'react';
import { View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { users } from './Data';

import { ListItem, List } from 'react-native-elements';
export class InactiveUsers extends Component {



    render() {

        const filteredData = users.filter((item) => item.Active == false);
        return (

            <View>
                <ScrollView>
                    <List>
                        <FlatList
                            data={filteredData}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity onPress={() => alert(`${item.first_name} ${item.email} ${item.gender}`)}>
                                    <ListItem
                                        key={index}
                                        title={`${item.first_name} ${item.last_name}`}
                                        subtitle={item.email}
                                    />
                                </TouchableOpacity>
                            )}
                        />
                    </List>
                </ScrollView>
            </View>
        )
    }
}