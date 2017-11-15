import React from 'react';

import { Button } from 'react-native-elements';

const AuthButton = ({ title }) => {
    return (
        <Button
            title={title}
            buttonStyle={AuthButtonStyles.Container}
        />
    )
}
const AuthButtonStyles = {
    Container: {
        backgroundColor: '#3F81F1',
        padding: 13
    }
}
export { AuthButton }