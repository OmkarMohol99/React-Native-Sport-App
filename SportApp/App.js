import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {View, StyleSheet, AsyncStorage, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import LeagueScreen from './screens/LeagueScreen';
import SportScreen from './screens/SportScreen';
import TeamScreen from './screens/TeamsScreen';
import SportDetailsScreen from './screens/SportsDetailsScreen';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2500);
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Leagues" component={LeagueScreen} />
        <Tab.Screen name="Sports" component={SportScreen} />
        <Tab.Screen
          name="Teams"
          component={TeamScreen}
          options={{
            tabBarButton: () => <View style={{width: 0, height: 0}}></View>,
            tabBarVisible: false, //hide tab bar on this screen
          }}
        />
        <Tab.Screen
          name="Sports Details"
          component={SportDetailsScreen}
          options={{
            tabBarButton: () => <View style={{width: 0, height: 0}}></View>,
            tabBarVisible: false, //hide tab bar on this screen
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export default class StartingScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstLaunch: null,
//     };
//   }

//   componentDidMount() {
//     AsyncStorage.getItem('alreadyLaunched').then(Value => {
//       if (Value === null) {
//         AsyncStorage.setItem('alreadyLaunched', 'true').then(() => {
//           this.props.navigation.replace('Leagues');
//         });
//       } else {
//         this.props.navigation.replace('Teams');
//       }
//     });
//   }
//   render() {
//     if (this.state.firstLaunch === null) {
//       return (
//         <NavigationContainer>
//           <Tab.Navigator>
//             <Tab.Screen name="Leagues" component={LeagueScreen} />
//             <Tab.Screen name="Sports" component={SportScreen} />
//             <Tab.Screen
//               name="Teams"
//               component={TeamScreen}
//               options={{
//                 tabBarButton: () => <View style={{width: 0, height: 0}}></View>,
//                 tabBarVisible: false, //hide tab bar on this screen
//               }}
//             />
//             <Tab.Screen
//               name="SportsDetails"
//               component={SportDetailsScreen}
//               options={{
//                 tabBarButton: () => <View style={{width: 0, height: 0}}></View>,
//                 tabBarVisible: false, //hide tab bar on this screen
//               }}
//             />
//           </Tab.Navigator>
//         </NavigationContainer>
//       );
//     }
//   }
// }
