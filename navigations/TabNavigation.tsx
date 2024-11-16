import {useColorScheme} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomeScreen from '../components/tabs/HomeScreen';
import CalendarScreen from '../components/tabs/CalendarScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    const isDarkMode = useColorScheme() === 'dark';
    const themeBasedStyle: any = {
      color: isDarkMode ? Colors.white : Colors.black,
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
      statusBarStyle: isDarkMode ? 'light-content' : 'dark-content',
    };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Calendar') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FBB120',
        tabBarStyle: {backgroundColor: themeBasedStyle.backgroundColor},
        tabBarInactiveTintColor: themeBasedStyle.color,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
    </Tab.Navigator>
  );
}
