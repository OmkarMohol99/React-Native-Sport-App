// import {StackActions} from '@react-navigation/native';
// import * as React from 'react';
// import {NavigationActions} from 'react-navigation';

// const resetAction = StackActions.reset({
//   index: 0,
//   actions: [NavigationActions.navigate({routename: 'Leagues'})],
// });

// export default class SplashScreenImage extends React.Component {
//   componentDidMount() {
//     setTimeout(() => {
//       this.props.navigation.dispatch(resetAction);
//     }, 4 * 1000);
//   }
//   render() {
//     return (
//       <View>
//         <Image source={require('../android/app/src/images/appstore.png')} />
//       </View>
//     );
//   }
// }

import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import Colors from '../../constants/colors';

const Splash = () => {
  //   const {t} = useTranslation();

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.brandNameContainer}
          source={require('../android/app/src/images/launcher_screen.png')}
        />

        {/* <View style={styles.brandNameContainer}>
      <Text style={styles.yelloText}>Car</Text>
      <Text style={styles.whiteText}>max</Text>
      <Text style={styles.symbol}>®</Text>
      </View>    
      <View style={styles.yellowBoxContainer}>
        <View style={styles.yellowBox}></View>
        <View style={styles.yellowBox}></View>
        <View style={styles.yellowBox}></View>
        <View style={styles.yellowBox}></View>
        <View style={styles.yellowBox}></View>
      </View> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
    width: '100%',
    height: '100%',
  },
  brandNameContainer: {
    width: '100%',
    height: '60%',
  },
});

export default Splash;
