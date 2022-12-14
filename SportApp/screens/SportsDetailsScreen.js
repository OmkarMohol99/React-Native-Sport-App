import * as React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
function SportDetailsScreen() {
  const route = useRoute();
  const sportsDetails = route.params['details'];

  return (
    <View style={{flex: 1, padding: 24}}>
      <Text>
        <Image
          style={styles.image}
          source={{uri: `${sportsDetails.strSportThumb}`}}
        />
        {'\n'}
        {'\n'}
        <Text style={styles.text}>- {sportsDetails.strSport}</Text>
        {'\n'}
        {sportsDetails.strSportDescription}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    height: 100,
    width: 320,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});

export default SportDetailsScreen;
