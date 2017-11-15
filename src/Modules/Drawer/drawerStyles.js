import { blue } from './../../Constants/color';

export const DrawerStyles = {
    drawerContainer: {
        display: 'flex',
        height: '100%',
        justifyContent: 'space-between',
    },
    drawerHeader: {
        width: '100%',
        display: 'flex',
        height: 50,
        backgroundColor: blue,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    drawerHeaderText: {
        fontSize: 20,
        color: 'white'
    },
    TabContainer: {
        flex: 1
    },
    drawerFooter: {
        width: '100%',
        display: 'flex',
        height: 70,
        backgroundColor: blue,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10,
    },
    drawerFooterAddButton:{
        display: 'flex',
        flexDirection: 'row',
        width: 110
    },
    drawerFooterAddIcon: {
        marginRight: 10
    },
    drawerFooterAddText: {
        fontSize:15,
        color: 'white'
    },
    drawerSendButton: {
        backgroundColor: 'white',
        color: blue,
        borderWidth: 0.5,
        borderColor: '#D1D1D1',
        marginBottom: -10,
    }
}