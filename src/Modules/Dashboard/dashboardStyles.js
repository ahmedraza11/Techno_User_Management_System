import { blue } from '../../Constants/color';

export const DashboardStyles = {
    main_container: {
        backgroundColor: 'white',
        display: "flex",
        flexDirection: 'row'

    },
    header_title: {
        flex: 1,
        color: blue,
        fontSize: 18,
        display: 'flex',
        paddingLeft: 35,
        justifyContent: 'flex-start'
    },
    DashboardItems: {
        width: '42%',
        height: 140,
        margin: 10,
        borderRadius: 10
    },
    DashBoardIconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    DashboardItemsText: {
        fontSize: 13,
        // fontWeight: 'bold',
        color: '#fff',
        marginTop: 5,
        textAlign: 'center'
    }
}