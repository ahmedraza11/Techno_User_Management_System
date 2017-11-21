import { blue } from '../../Constants/color';

export const PendingJobsStyles = {
    header_title: {
        flex: 1,
        color: blue,
        fontSize: 18,
        display: 'flex',
        paddingLeft: 35,
        justifyContent: 'flex-start'
    },
    mainContainer: {
        // borderWidth: 1,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: 70
    },
    Banner: {
        width: '100%',
        height: 150,
        padding: 10,
        backgroundColor: '#4081F2'
    },
    BannerInnerContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    BannerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    BannerSubTitleContainer: {
        marginTop: 10
    },
    BannerSubTitle: {
        color: 'white',
        fontSize: 13,
    },
 
    BannerButton: {
        borderWidth: 0.7,
        borderColor: 'white',
        width: 120,
        height: 33,
        display: 'flex',
        marginTop: 10,
    },
    TabViewMainContainer: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flex: 1
    },
    TabViewInnerContainer: {
        flex: 1,
    }

}