const lightBlue = "#5C98FF";
const dardBlue = "#4081F2";
export const MenuDrawerStyle = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: 'green'
    },
    Header: {
        width: '100%',
        height: 200,
        backgroundColor: '#5C98FF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Content: {
        display: 'flex',
        flex: 1,
        width: '100%',
        backgroundColor: "#4081F2",
        padding: 25,
        paddingBottom: 10
    },
    userInfo: {
        display: 'flex',
        alignItems: 'center'
    },
    userName: {
        fontSize: 18,
        color: 'white',
        marginTop: 12
    },
    userBalance: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 12

    },
    balanceText: {
        fontSize: 14,
        color: 'white',
    },
    Menu: {
        display: 'flex',
        flexDirection: 'column'
    },
    MenuItem: {
        color: 'white',
        marginLeft: 12,
        fontSize: 16
    },
    MenuItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center'
    },
    MenuAngularItemContainer: {
        display: 'flex',
        alignSelf: 'flex-end'
    },
    MenuAboutItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 35,
        alignItems: 'center'
    }

}