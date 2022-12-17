import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LeagueScreen from '../screens/LeagueScreen';
import SportScreen from '../screens/SportScreen';
import TeamsScreen from '../screens/TeamsScreen';
import SportsDetailsScreen from '../screens/SportsDetailsScreen';

const Tab = createBottomTabNavigator();
export const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Leagues"
        component={LeagueScreen}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'black'},
        }}
      />
      <Tab.Screen
        name="Sports"
        component={SportScreen}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'black'},
        }}
      />
    </Tab.Navigator>
  );
};

export const AppStack = () => {
  const AppStack = createNativeStackNavigator();
  return (
    <AppStack.Navigator
      initialRouteName="Sport App"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'purple',
        headerStyle: {backgroundColor: '#f6feff'},
      }}>
      <AppStack.Screen name="Sport App" component={BottomTabs} />
      <AppStack.Screen name="Teams" component={TeamsScreen} />
      <AppStack.Screen name="Sports Details" component={SportsDetailsScreen} />
    </AppStack.Navigator>
  );
};
