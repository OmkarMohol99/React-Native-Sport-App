import * as React from 'react';
import {
  Image,
  Text,
  View,
  Button,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import {useRoute} from '@react-navigation/native';
function SportDetailsScreen() {
  const route = useRoute();
  // console.log(route.params['details']);
  const sportsDetails = route.params['details'];

  return (
    <View style={{flex: 1, padding: 24}}>
      <Text>
        {sportsDetails.strSport}
        {'\n'}
        <Image
          style={styles.image}
          source={{uri: `${sportsDetails.strSportThumb}`}}
        />
        {'\n'}
        {'\n'}
        {'\n'}
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
    width: 250,
  },
});

export default SportDetailsScreen;
