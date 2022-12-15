// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/13/2022 => 7:27 PM  *** //


import {Animated, Image, SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import styles from './InnerNavigationDrawer.styles';
import images from '../../../assets/images';
import {useRef, useState} from 'react';
import {TabButton} from '../../components';

export default function InnerNavigationDrawer({
                                                  navigation,
                                                  initialTabName,
                                                  isProfileSection,
                                                  userNameText,
                                                  profileImage,
                                                  profileSectionButtonText,
                                                  profileSectionButtonOnPress,
                                              }) {
    const [currentTab, setCurrentTab] = useState(initialTabName);
    const [showMenu, setShowMenu] = useState(false);
    const offsetValue = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.drawerContainer}>
                {isProfileSection ?
                    <View>
                        <Image source={profileImage} style={styles.profileImage}/>
                        <Text style={styles.userNameText}>{userNameText}</Text>
                        <TouchableOpacity onPress={profileSectionButtonOnPress()}>
                            <Text style={styles.viewProfileBtnText}>{profileSectionButtonText}</Text>
                        </TouchableOpacity>
                    </View>
                    : <></>}
                <View style={styles.tabBarButtonsContainer}>
                    <TabButton currentTab={currentTab} setCurrentTab={setCurrentTab} title={'Home'}
                               image={images.icHome}/>
                    <TabButton currentTab={currentTab} setCurrentTab={setCurrentTab} title={'Search'}
                               image={images.icSearch}/>
                    <TabButton currentTab={currentTab} setCurrentTab={setCurrentTab} title={'Notifications'}
                               image={images.icBell}/>
                    <TabButton currentTab={currentTab} setCurrentTab={setCurrentTab} title={'Settings'}
                               image={images.icSettings}/>
                </View>
                <View>
                    <TabButton currentTab={currentTab} setCurrentTab={setCurrentTab} title={'LogOut'}
                               image={images.icLogout}/>
                </View>
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

                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: 'black',
                            paddingTop: 20,
                        }}>{currentTab}</Text>

                        <Image source={images.photo} style={{
                            width: '100%',
                            height: 300,
                            borderRadius: 15,
                            marginTop: 25,
                        }}></Image>

                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                            , paddingTop: 15,
                            paddingBottom: 5,
                        }}>{'abbbdhe fajnfa'}</Text>

                        <Text style={{}}>{'hbfannd ba a dabjnn aheh ads'}</Text>

                    </Animated.View>
                </TouchableWithoutFeedback>

            </Animated.View>
        </SafeAreaView>
    );
}
