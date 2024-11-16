import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import WebView from 'react-native-webview';

const {height, width} = Dimensions.get('window');

export default function HomeScreen({navigation}: any) {
  const isDarkMode = useColorScheme() === 'dark';

  const themeBasedStyle: any = {
    color: isDarkMode ? Colors.white : Colors.black,
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
    statusBarStyle: isDarkMode ? 'light-content' : 'dark-content',
  };

  const recommendedInFinance = [
    {
      videoUrl: 'https://www.youtube.com/embed/6sq2o1atWLY?si=W0oo1WVzSH76CPN-',
      title: 'Beginners guide to personal finance',
      description:
        "A common personal finance mistake we all make is not starting to invest early, even if we can. Maybe it's because of the youthful naïveté, but early on in our careers, we think that saving small amounts doesn't matter.",
      duration: '07:13',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/tj_iMCdko_M?si=oAQGlfi8NClVhxAC',
      title: '7 Personal Finance Principles Made Easier Through Minimalism',
      description:
        'Can minimalism help us spend less money? Here are 7 ways minimalism can make a direct impact on our finances and teach us how to spend less.',
      duration: '06:55',
    },
  ];

  const popularVideos = [
    {
      videoUrl: 'https://www.youtube.com/embed/C3FyIev_f8s?si=aoPO44dYkyij3P4s',
      title: 'The Growing Problem With Personal Finance YouTuber "Influencers"',
      description:
        "Now of course most of you watching know that the YouTube ads saying that you can earn 6 figures in a month by selling on Amazon, Forex trading, or flipping real estate are full of shit.",
      duration: '10:53',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/W5QXCLr3YdM?si=G7C2CfrIuBjikWLi',
      title: 'Why I Stopped Listening To Finance "Influencers"',
      description:
        'In this video I discuss the growing problem of finance influencers and Youtubers. Large personal finance Youtubers such as Graham Stephan, Andrei Jikh, and Meet Kevin teach their audience about topics such as investing, the stock market, real estate and more.',
      duration: '12:10',
    },
  ];

  return (
    <>
      <StatusBar
        barStyle={themeBasedStyle.statusBarStyle}
        backgroundColor={themeBasedStyle.backgroundColor}
        // backgroundColor="transparent"
        // translucent={true}
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: themeBasedStyle.backgroundColor,
        }}>
        <View style={[styles.appBar, themeBasedStyle.backgroundColor]}>
          <Image
            source={require('../../assets/images/learn-online-logo.png')}
            style={styles.learnOnlineLogo}
          />
          <View style={styles.appBarRightContent}>
            <Icon
              name="notifications-outline"
              size={30}
              color={themeBasedStyle.color}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Image
                source={require('../../assets/images/user-profile.jpg')}
                style={styles.userImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchInputContainer}>
          <Icon
            style={styles.inputIcon}
            name="search-outline"
            size={25}
            color="#A2A2A7"
          />
          <TextInput
            style={[styles.input, {color: themeBasedStyle.color}]}
            placeholder="Search here..."
            placeholderTextColor="#888"
          />
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text
            style={[styles.sectionTitleText, {color: themeBasedStyle.color}]}>
            Recommended in Finance
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {recommendedInFinance?.map((item, i) => (
              <View
                key={i}
                style={[styles.cardContainer, i == 0 ? {marginLeft: 20} : '']}>
                <WebView
                  source={{uri: item.videoUrl}}
                  style={styles.video}
                  allowsFullscreenVideo={true}
                />
                <View style={styles.cardTitleContainer}>
                  <Text
                    style={[
                      styles.cardTitleText,
                      {color: themeBasedStyle.color},
                    ]}>
                    {item.title}
                  </Text>
                  <View
                    style={[
                      styles.videoDurationContainer,
                      {
                        backgroundColor: isDarkMode
                          ? 'rgba(255, 255, 255, 0.3)'
                          : 'rgba(0, 0, 0, 0.1)',
                      },
                    ]}>
                    <Icon
                      name="heart"
                      size={20}
                      color={themeBasedStyle.color}
                    />
                    <Text
                      style={[
                        styles.videoDurationText,
                        {color: themeBasedStyle.color},
                      ]}>
                      {item.duration}
                    </Text>
                  </View>
                </View>
                <Text
                  style={[
                    styles.cardDescriptionText,
                    {color: themeBasedStyle.color},
                  ]}
                  numberOfLines={3}>
                  {item.description}
                </Text>
              </View>
            ))}
          </ScrollView>
          <Text
            style={[styles.sectionTitleText, {color: themeBasedStyle.color}]}>
            Popular Videos
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {popularVideos?.map((item, i) => (
              <View
                key={i}
                style={[styles.cardContainer, i == 0 ? {marginLeft: 20} : '']}>
                <WebView
                  source={{uri: item.videoUrl}}
                  style={styles.video}
                  allowsFullscreenVideo={true}
                />
                <View style={styles.cardTitleContainer}>
                  <Text
                    style={[
                      styles.cardTitleText,
                      {color: themeBasedStyle.color},
                    ]}>
                    {item.title}
                  </Text>
                  <View
                    style={[
                      styles.videoDurationContainer,
                      {
                        backgroundColor: isDarkMode
                          ? 'rgba(255, 255, 255, 0.3)'
                          : 'rgba(0, 0, 0, 0.1)',
                      },
                    ]}>
                    <Icon
                      name="heart"
                      size={20}
                      color={themeBasedStyle.color}
                    />
                    <Text
                      style={[
                        styles.videoDurationText,
                        {color: themeBasedStyle.color},
                      ]}>
                      {item.duration}
                    </Text>
                  </View>
                </View>
                <Text
                  style={[
                    styles.cardDescriptionText,
                    {color: themeBasedStyle.color},
                  ]}
                  numberOfLines={3}>
                  {item.description}
                </Text>
              </View>
            ))}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appBar: {
    paddingHorizontal: 20,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // zIndex: 1,
  },
  learnOnlineLogo: {
    resizeMode: 'cover',
  },
  userImage: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 99,
    borderColor: '#ccc',
    resizeMode: 'cover',
  },
  appBarRightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  searchInputContainer: {
    position: 'relative',
    marginHorizontal: 20,
    paddingBottom: 10,
    marginTop: 20,
  },
  inputIcon: {
    position: 'absolute',
    top: 12,
    left: 10,
  },
  input: {
    paddingLeft: 45,
    paddingRight: 10,
    paddingVertical: 10,
    borderRadius: 6,
    borderColor: '#A2A2A7',
    borderWidth: 1,
  },
  scrollViewContent: {
    paddingBottom: 25,
  },
  sectionTitleText: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 25,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  cardContainer: {
    width: 350,
    marginRight: 20,
  },
  video: {
    width: '100%',
    height: 190,
    borderColor: '#A2A2A7',
    borderWidth: 0.3,
  },
  cardTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
    marginTop: 10,
  },
  cardTitleText: {
    flex: 1,
    flexGrow: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  videoDurationContainer: {
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    gap: 5,
    borderRadius: 99,
  },
  videoDurationText: {
    fontSize: 14,
  },
  cardDescriptionText: {
    fontSize: 14,
    marginTop: 5,
  },
});
