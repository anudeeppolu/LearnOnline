import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  useColorScheme,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RadioGroup, {RadioButtonProps, RadioGroupProps} from 'react-native-radio-buttons-group';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView} from 'react-native-safe-area-context';

const {height, width} = Dimensions.get('window');

export default function SpecializationScreen({navigation}: any) {
  const totalScreens = [1,2,3,4,5,6,7];
  const [selectedId, setSelectedId] = useState('1');
  const isDarkMode = useColorScheme() === 'dark';
  const themeBasedStyle: any = {
    color: isDarkMode ? Colors.white : Colors.black,
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
    statusBarStyle: isDarkMode ? 'light-content' : 'dark-content',
  };

  const radioButtons: RadioButtonProps[] = [
    {
      id: '1',
      label: 'Finance',
      value: 'option1',
    },
    {
      id: '2',
      label: 'Marketing',
      value: 'option2',
    },
    {
      id: '3',
      label: 'AI/ML',
      value: 'option3',
    },
    {
      id: '4',
      label: 'Data Analytics',
      value: 'option4',
    },
    {
      id: '5',
      label: 'UX/UI Design',
      value: 'option5',
    },
    {
      id: '6',
      label: 'Business Management',
      value: 'option6',
    },
  ];

  const onPressRadioButton = (value: string) => { 
    setSelectedId(value);
  };

  const getRadioButtonStyle = (id: string) =>
    id === selectedId ? "#FBB120" : "#A2A2A7";

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
                    (index ==  0 || index ==  1 || index == 2)  ? styles.progressBarFilledColor : {backgroundColor:themeBasedStyle.color},
                  ]}></View>
                ))}
              </View>
              <Text style={styles.label}>
                <Text
                  style={[styles.highlight, {color: themeBasedStyle.color}]}>
                   {totalScreens[2]}
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
                Do you have a specialization in mind?
              </Text>
            </View>

            {/* Radio Buttons */}
            <RadioGroup
              layout="column"
              radioButtons={radioButtons.map((button) => ({
                ...button,
                color: getRadioButtonStyle(button.id),
                labelStyle: {color: getRadioButtonStyle(button.id)},
              }))}
              onPress={onPressRadioButton}
              selectedId={selectedId}
              containerStyle={styles.radioGroup}
            />
          </View>
          {/* Next Button */}
          <TouchableOpacity style={styles.nextButton} onPress={() => {navigation.push('HighestEducation')}}>
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
    flex: 1,
    backgroundColor: '#A2A2A7',
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
  radioGroup: {
    alignItems: 'flex-start',
    rowGap: 15,
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
