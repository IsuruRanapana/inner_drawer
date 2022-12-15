// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/13/2022 => 7:27 PM  *** //

import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5359D1',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    titleText: {
        color: 'aqua',
        fontWeight: 'bold',
        fontSize: 16,
    },
    drawerContainer: {
        justifyContent: 'flex-start',
        padding: 15,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginTop: 8,
    },
    userNameText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
    },
    viewProfileBtnText: {
        marginTop: 6,
        color: 'white',
    },
    tabBarButtonsContainer:{
        flexGrow:1,
        marginTop:50,
    },
});
