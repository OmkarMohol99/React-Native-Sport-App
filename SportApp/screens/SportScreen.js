import * as React from 'react';
import {
  Image,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';
import {getSportsData} from '../database/Handlers';
function SportScreen({navigation}) {
  const [isLoading, setLoading] = React.useState(false);
  const [sport, setSport] = React.useState([]);

  React.useEffect(() => {
    getSportsData(setSport, setLoading);
  }, []);

  return (
    <View style={{flex: 1, padding: 20, paddingTop: -20}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={sport.sports}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text
              style={styles.text}
              onPress={() =>
                navigation.navigate('Sports Details', {details: item})
              }>
              - {item.strSport}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              <Image
                style={styles.image}
                source={{uri: `${item.strSportThumb}`}}
              />
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
            </Text>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    height: 200,
    width: 330,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});

export default SportScreen;
