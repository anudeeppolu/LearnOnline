import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('window');

export default function EmailAddressScreen({navigation}: any) {
  const totalScreens = [1,2,3,4,5,6,7];
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
          style={{
            padding: 20,
            height: height,
            justifyContent: 'space-between',
            backgroundColor: themeBasedStyle.backgroundColor,
          }}>
          <View>
            {/* Top Progress Bar */}
            <View style={styles.progressBarWrapper}>
              <View style={styles.progressBarContainer}>
                {totalScreens?.map((_, index) => (
                  <View
                  key={index}
                  style={[
                    styles.progressBar,
                    (index ==  0 || index ==  1)  ? styles.progressBarFilledColor : {backgroundColor:themeBasedStyle.color},
                  ]}></View>
                ))}
              </View>
              <Text style={styles.label}>
                <Text
                  style={[styles.highlight, {color: themeBasedStyle.color}]}>
                  {totalScreens[1]}
                </Text>
                /{totalScreens.length}
              </Text>
            </View>

            {/* Back Arrow and Title */}
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="chevron-back"
                  size={30}
                  color={themeBasedStyle.color}
                />
              </TouchableOpacity>
              <Text style={styles.headerText}>
                Please enter your email address.
              </Text>
            </View>

            <View style={styles.inputContainer}>
              <Image
                source={require('../assets/images/mail.png')}
                style={styles.inputIcon}
              />
              <TextInput
                style={[styles.input]}
                placeholder="Enter your email address"
                placeholderTextColor="#888"
                keyboardType='email-address'
              />
            </View>
          </View>
          {/* Next Button */}
          <TouchableOpacity style={styles.nextButton} onPress={() => {navigation.push('Specialization')}}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  progressBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
    marginBottom: 20,
  },
  progressBarContainer: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 15,
  },
  progressBar: {
    height: 4,
    flex: 1
  },
  progressBarFilledColor: {
    backgroundColor: '#FBB120',
  },
  label: {
    fontSize: 16,
    color: '#A2A2A7',
  },
  highlight: {
    fontWeight: '700',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  headerText: {
    color: '#FBB120',
    fontSize: 20,
    marginLeft: 10,
  },
  inputContainer: {
    position: 'relative',
  },
  inputIcon: {
    position: 'absolute',
    top: 15,
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
  nextButton: {
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
