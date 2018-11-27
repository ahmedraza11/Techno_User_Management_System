import React from 'react';
import { Image, View, TextInput } from 'react-native';

import { Icon } from 'react-native-elements';

const TextField = ({ icon, placeHolder, passwordType }) => {
    return (
        <View style={TextFieldStyles.Container}>
            <Image
                style={TextFieldStyles.Icon}
                source={icon}
            />
            <TextInput underlineColorAndroid="transparent" secureTextEntry={passwordType} style={TextFieldStyles.Input} placeholder={placeHolder} placeholderTextColor="#3F81F1" />
        </View>
    );
}

const TextFieldStyles = {

    Container: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: "#3F81F1",
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingLeft: 10
    },
    Icon: {
        marginTop: 18,
        marginBottom: 0,

    },
    Input: {
        flex: 1,
        marginTop: 15,
        paddingLeft: 10,
        marginBottom: 0,
        fontSize: 15,
        color: '#3F81F1',
    }

}

export { TextField }