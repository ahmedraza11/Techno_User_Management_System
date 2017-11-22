import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    ScrollView
} from 'react-native';
import { ViewByStyles } from './viewByStyles';

import {

} from 'react-native-elements';

export class ViewBy extends Component {
    render() {
        return (
            <ScrollView>

                <View style={ViewByStyles.Container}>
                    <View style={ViewByStyles.listDateViewer}>
                        <Text style={ViewByStyles.listDateText}>Today</Text>
                        <Text style={ViewByStyles.listDateText}>Oct 31</Text>
                    </View>
                    <View style={ViewByStyles.ListItem}>
                        <View style={ViewByStyles.ListItemTitleContainer}>
                            <Text style={ViewByStyles.ListItemTitleText}>Logo + Banner + Icons design</Text>
                            <Text style={ViewByStyles.ListItemSubTitleText}>Jack Quinn</Text>
                        </View>
                        <View style={ViewByStyles.ListItemRateContainer}>
                            <Text style={ViewByStyles.ListItemTitleText}>$100</Text>
                            <Text style={ViewByStyles.ListItemSubTitleText}>31.10.2017</Text>
                        </View>
                    </View>
                    <View style={ViewByStyles.ListItem}>
                        <View style={ViewByStyles.ListItemTitleContainer}>
                            <Text style={ViewByStyles.ListItemTitleText}>Looking for some graphics</Text>
                            <Text style={ViewByStyles.ListItemSubTitleText}>Leo Taylor</Text>
                        </View>
                        <View style={ViewByStyles.ListItemRateContainer}>
                            <Text style={ViewByStyles.ListItemTitleText}>$40</Text>
                            <Text style={ViewByStyles.ListItemSubTitleText}>31.10.2017</Text>
                        </View>
                    </View>
                    <View style={ViewByStyles.listDateViewer}>
                        <Text style={ViewByStyles.listDateText}>Sept. 5</Text>
                    </View>
                    <View style={ViewByStyles.ListItem}>
                        <View style={ViewByStyles.ListItemTitleContainer}>
                            <Text style={ViewByStyles.ListItemTitleText}>Android / iOS DIY design..</Text>
                            <Text style={ViewByStyles.ListItemSubTitleText}>Mia Mckenzie</Text>
                        </View>
                        <View style={ViewByStyles.ListItemRateContainer}>
                            <Text style={ViewByStyles.ListItemTitleText}>$200</Text>
                            <Text style={ViewByStyles.ListItemSubTitleText}>05.09.2017</Text>
                        </View>
                    </View>
                    <View style={ViewByStyles.listDateViewer}>
                        <Text style={ViewByStyles.listDateText}>Sept. 2</Text>
                    </View>
                    <View style={ViewByStyles.ListItem}>
                        <View style={ViewByStyles.ListItemTitleContainer}>
                            <Text style={ViewByStyles.ListItemTitleText}>Need iOS UX and graphics...</Text>
                            <Text style={ViewByStyles.ListItemSubTitleText}>Jack Quinn</Text>
                        </View>
                        <View style={ViewByStyles.ListItemRateContainer}>
                            <Text style={ViewByStyles.ListItemTitleText}>$150</Text>
                            <Text style={ViewByStyles.ListItemSubTitleText}>02.09.2017</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
