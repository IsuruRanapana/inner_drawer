// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/14/2022 => 1:27 PM  *** //


import {Image, Text, TouchableOpacity, View} from 'react-native';

export default function TabButton({currentTab, setCurrentTab, title, image, isLogout=false,tabButtonOnPress, logoutButtonOnPress}) {
    return (
        <TouchableOpacity onPress={() => {
            if (isLogout) {
                logoutButtonOnPress();
            } else {
                setCurrentTab(title);
                tabButtonOnPress();
            }
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 8,
                backgroundColor: currentTab === title ? 'white' : 'transparent',
                paddingLeft: 13,
                paddingRight: 35,
                borderRadius: 8,
                marginTop: 15,
            }}>

                <Image source={image} style={{
                    width: 25, height: 25,
                    tintColor: currentTab === title ? '#5359D1' : 'white',
                }}></Image>

                <Text style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    paddingLeft: 15,
                    color: currentTab === title ? '#5359D1' : 'white',
                }}>{title}</Text>

            </View>
        </TouchableOpacity>
    );
}
