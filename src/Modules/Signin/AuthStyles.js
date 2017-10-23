
export const AuthStyles = {
    MainTabContainer: {
        display: 'flex',
        borderWidth: 1,
        borderColor: 'red',
        height: '100%'       
    },
    container: {
        display: 'flex',
        flex: 1,
    },
    Header: {
        display: 'flex',
        backgroundColor: "#3F81F1",
        height: 120
    },
    HeaderLogoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LogoText: {
        color: "#fff",
        fontSize: 35,
        fontWeight: 'bold'
    },
    LogoImage: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: -30,
        left: -6
    },
    Tabs: {
        width: '100%',
        backgroundColor: "#fff",
        height: '100%'
    },
    TabContainer: {
        display: 'flex',
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        width: '100%',
        borderWidth: 3,
        justifyContent:"space-between",
        borderColor: 'pink',
    },
    AuthButton: {
        display: 'flex',
        width: '100%',
        alignSelf:'center',
        marginTop: '3%',
        marginBottom: '4%',
        borderWidth: 1,
        borderColor: 'green'
    },
    ForgotPassText: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 7,
        color: '#3F81F1'
    },
    ScrollViewStyle: {
        width: 1000
    },
    SignupTextFieldsContainer: {
        display: 'flex',
        alignSelf: 'center',
    },
    SigninTextFieldsContainer: {
        display: 'flex',
        alignSelf: 'center',
        justifyContent:'space-between',
        borderWidth: 1,
        
    }
}