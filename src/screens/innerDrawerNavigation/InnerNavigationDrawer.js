// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/13/2022 => 7:27 PM  *** //


import {
    Animated,
    FlatList,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import styles from './InnerNavigationDrawer.styles';
import images from '../../../assets/images';
import {useEffect, useRef, useState} from 'react';
import {TabButton} from '../../components';

export default function InnerNavigationDrawer({
                                                  navigation,
                                                  initialTab,
                                                  isProfileSection,
                                                  userNameText,
                                                  profileImage,
                                                  profileSectionButtonText,
                                                  profileSectionButtonOnPress,
                                                  isLogoutButton,
                                                  logoutButtonOnPress,
                                                  tabs,
                                                  drawerBackgroundStyles,
                                                  profileImageStyles,
                                                  profileSectionUserNameStyles,
                                                  profileSectionButtonStyles,
                                                  tabButtonEnabledTextColor,
                                                  tabButtonDisabledTextColor,
                                                  tabButtonEnabledBackgroundColor,

                                                  children,
                                              }) {

    const [currentTab, setCurrentTab] = useState(initialTab);
    const [showMenu, setShowMenu] = useState(false);
    const offsetValue = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;

    const renderItem = ({item, index}) => {
        return (
            <TabButton currentTab={currentTab} setCurrentTab={setCurrentTab} title={item.title}
                       image={item.image} index={index} tabButtonEnabledTextColor={tabButtonEnabledTextColor}
                       tabButtonDisabledTextColor={tabButtonDisabledTextColor}
                       tabButtonEnabledBackgroundColor={tabButtonEnabledBackgroundColor}
            />
        );
    };
    return (
        <SafeAreaView style={{...styles.container, ...drawerBackgroundStyles}}>
            <View style={styles.drawerContainer}>
                {isProfileSection ?
                    <View>
                        <Image source={profileImage} style={{...styles.profileImage, ...profileImageStyles}}/>
                        <Text style={{...styles.userNameText, ...profileSectionUserNameStyles}}>{userNameText}</Text>
                        <TouchableOpacity onPress={profileSectionButtonOnPress}>
                            <Text
                                style={{...styles.viewProfileBtnText, ...profileSectionButtonStyles}}>{profileSectionButtonText}</Text>
                        </TouchableOpacity>
                    </View>
                    : <></>}
                <View style={styles.tabBarButtonsContainer}>
                    <FlatList data={tabs} renderItem={renderItem} keyExtractor={(item, index) => index.toString()}/>
                </View>
                {isLogoutButton ? <View>
                    <TabButton currentTab={currentTab} setCurrentTab={setCurrentTab} title={'LogOut'} isLogout={true}
                               logoutButtonOnPress={logoutButtonOnPress}
                               image={images.icLogout}/>
                </View> : <></>}
            </View>

            <Animated.View style={{
                flexGrow: 1,
                backgroundColor: 'white',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                paddingHorizontal: 15,
                paddingVertical: 20,
                borderRadius: showMenu ? 15 : 0,
                // Transforming View...
                transform: [
                    {scale: scaleValue},
                    {translateX: offsetValue},
                ],
            }}>
                <TouchableWithoutFeedback onPress={() => {
                    if (showMenu) {
                        Animated.timing(scaleValue, {
                            toValue: showMenu ? 1 : 0.88,
                            duration: 300,
                            useNativeDriver: true,
                        })
                            .start();

                        Animated.timing(offsetValue, {
                            toValue: showMenu ? 0 : 230,
                            duration: 300,
                            useNativeDriver: true,
                        })
                            .start();

                        Animated.timing(closeButtonOffset, {
                            toValue: !showMenu ? -30 : 0,
                            duration: 300,
                            useNativeDriver: true,
                        })
                            .start();
                        setShowMenu(!showMenu);

                    }
                }}>
                    <Animated.View style={{
                        transform: [{
                            translateY: closeButtonOffset,
                        }],
                    }}>
                        <TouchableOpacity onPress={() => {
                            Animated.timing(scaleValue, {
                                toValue: showMenu ? 1 : 0.88,
                                duration: 300,
                                useNativeDriver: true,
                            })
                                .start();

                            Animated.timing(offsetValue, {
                                toValue: showMenu ? 0 : 230,
                                duration: 300,
                                useNativeDriver: true,
                            })
                                .start();

                            Animated.timing(closeButtonOffset, {
                                toValue: !showMenu ? -30 : 0,
                                duration: 300,
                                useNativeDriver: true,
                            })
                                .start();

                            setShowMenu(!showMenu);
                        }}>

                            <Image source={showMenu ? images.icClose : images.icMenu} style={{
                                width: 20,
                                height: 20,
                                tintColor: 'black',
                                marginTop: 40,

                            }}></Image>

                        </TouchableOpacity>

                        {children[currentTab]}

                    </Animated.View>
                </TouchableWithoutFeedback>

            </Animated.View>
        </SafeAreaView>
    );
}
