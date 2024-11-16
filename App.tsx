import React from 'react';
import SignUpScreen from './components/SignUpScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SpecializationScreen from './components/SpecializationScreen';
import FullNameScreen from './components/FullNameScreen';
import EmailAddressScreen from './components/EmailAddressScreen';
import HighestEducationScreen from './components/HighestEducationScreen';
import YearOfExperienceScreen from './components/YearOfExperienceScreen';
import CurrentSectorScreen from './components/CurrentSectorScreen';
import LearnOnlineScreen from './components/LearnOnlineScreen';
import SuccessScreen from './components/SuccessScreen';
import TabNavigation from './navigations/TabNavigation';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="FullName"
          component={FullNameScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="EmailAddress"
          component={EmailAddressScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Specialization"
          component={SpecializationScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="HighestEducation"
          component={HighestEducationScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="CurrentSector"
          component={CurrentSectorScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="YearOfExperience"
          component={YearOfExperienceScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="LearnOnline"
          component={LearnOnlineScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Success"
          component={SuccessScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;