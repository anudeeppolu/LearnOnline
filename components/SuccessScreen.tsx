import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const {height, width} = Dimensions.get('window');

export default function SuccessScreen({navigation}: any) {
  const isDarkMode = useColorScheme() === 'dark';
  const themeBasedStyle: any = {
    color: isDarkMode ? Colors.white : Colors.black,
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
    statusBarStyle: isDarkMode ? 'light-content' : 'dark-content',
  };

  return (
    <>
      <StatusBar
        barStyle={themeBasedStyle.statusBarStyle}
        backgroundColor={themeBasedStyle.backgroundColor}
        // backgroundColor="transparent"
        // translucent={true}
      />
      <SafeAreaView>
        <View
          style={[
            styles.container,
            {
              height: height,
              backgroundColor: themeBasedStyle.backgroundColor,
            },
          ]}>
          <Image
            source={require('../assets/images/thank-you.png')}
            style={styles.bannerImage}
          />
          <Text style={[styles.labelText, {color: themeBasedStyle.color}]}>Thanks for your response</Text>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              navigation.navigate('TabNavigation');
            }}>
            <Text style={styles.nextButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    rowGap: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 320,
    resizeMode: 'cover',
  },
  labelText: {
    fontSize: 20,
  },
  nextButton: {
    width: "100%",
    marginTop: 10,
    backgroundColor: '#FBB120',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
