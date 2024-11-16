import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const {height, width} = Dimensions.get('window');

export default function SignUpScreen({navigation}:any) {
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
        <ScrollView>
          <View
            style={{
              height: height,
              backgroundColor: themeBasedStyle.backgroundColor,
            }}>
            {/* Top Banner Image */}
            <Image
              source={require('../assets/images/login-banner.png')}
              style={styles.bannerImage}
            />
            {/* Logo Section */}
            <View style={styles.learnOnlineContainer}>
              <Image
                source={require('../assets/images/learn-online-logo.png')}
                style={styles.learnOnlineLogo}
              />
              <Text
                style={[
                  styles.learnOnlineText,
                  {color: themeBasedStyle.color},
                ]}>
                Learn online
              </Text>
            </View>
            {/* Input Fields */}
            <View style={styles.form}>
              <Text style={styles.label}>Full Name</Text>
              <View style={styles.inputContainer}>
              <Image
                source={require('../assets/images/person.png')}
                style={styles.inputIcon}
              />
              <TextInput
                style={[styles.input, {color: themeBasedStyle.color}]}
                placeholder="Enter Full Name"
                placeholderTextColor="#888"
              />
               </View>
              <Text style={styles.label}>Phone Number</Text>
              <View style={styles.inputContainer}>
              <Image
                source={require('../assets/images/call.png')}
                style={styles.inputIcon}
              />
              <TextInput
                style={[styles.input, {color: themeBasedStyle.color}]}
                placeholder="Phone Number"
                placeholderTextColor="#888"
                keyboardType="phone-pad"
              />
              </View>

              {/* Sign Up Button */}
              <TouchableOpacity style={styles.signUpButton} onPress={() => {navigation.push('FullName')}}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
              </TouchableOpacity>

              {/* Already have an account? */}
              <Text style={styles.signInText}>
                Already have an account?
                <Text style={styles.signInLink}> Sign In</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bannerImage: {
    width: '100%',
    height: 320,
    resizeMode: 'cover',
  },
  learnOnlineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 10,
    marginTop: 25,
    marginBottom: 10,
  },
  learnOnlineLogo: {
    width: 35,
    height: 35,
    resizeMode: 'cover',
  },
  learnOnlineText: {
    fontSize: 24,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 14,
    color: '#A2A2A7',
  },
  inputContainer:{
    position: "relative",
    marginBottom: 25,
  },
  inputIcon: {
    position: "absolute",
    top: 15,
    left: 0,
  },
  input: {
    paddingLeft: 35,
    paddingVertical: 10,
    borderBottomColor: '#A2A2A7',
    borderBottomWidth: 1,
  },
  signUpButton: {
    backgroundColor: '#FBB120',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 35,
    marginTop: 10,
  },
  signUpButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInText: {
    color: '#A2A2A7',
    textAlign: 'center',
  },
  signInLink: {
    color: '#FBB120',
    fontWeight: 'bold',
  },
});