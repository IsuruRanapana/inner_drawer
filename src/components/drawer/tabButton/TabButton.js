// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/14/2022 => 1:27 PM  *** //


import {Image, Text, TouchableOpacity, View} from 'react-native';

export default function TabButton({
                                      currentTab,
                                      setCurrentTab,
                                      title,
                                      image,
                                      isLogout = false,
                                      logoutButtonOnPress,
                                      index,
                                      tabButtonEnabledTextColor = '#5359D1',
                                      tabButtonDisabledTextColor = 'white',
                                      tabButtonEnabledBackgroundColor = 'white',
                                  }) {
    return (
        <TouchableOpacity onPress={() => {
            if (isLogout) {
                logoutButtonOnPress();
            } else {
                setCurrentTab(index);
            }
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 8,
                backgroundColor: currentTab === index ? tabButtonEnabledBackgroundColor : 'transparent',
                paddingLeft: 13,
                paddingRight: 35,
                borderRadius: 8,
                marginTop: 15,
            }}>

                <Image source={image} style={{
                    width: 25, height: 25,
                    tintColor: currentTab === index ? tabButtonEnabledTextColor : tabButtonDisabledTextColor,
                }}></Image>

                <Text style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    paddingLeft: 15,
                    color: currentTab === index ? tabButtonEnabledTextColor : tabButtonDisabledTextColor,
                }}>{title}</Text>

            </View>
        </TouchableOpacity>
    );
}
