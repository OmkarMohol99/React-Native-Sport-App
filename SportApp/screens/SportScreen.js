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
function SportScreen({navigation}) {
  const [isLoading, setLoading] = React.useState(true);
  const [sport, setSport] = React.useState([]);

  const getSport = async () => {
    try {
      const response = await fetch(
        'https://www.thesportsdb.com/api/v1/json/2/all_sports.php',
      );
      const json = await response.json();
      setSport(json.sports);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  //   const getSport = () => {
  //     axios({
  //       url: 'https://www.thesportsdb.com/api/v1/json/2/all_sports.php',
  //       method: 'GET',
  //     }).then(res => {
  //       var response = res.data;
  //       setSport(response.sports);
  //     });
  //   };

  React.useEffect(() => {
    getSport();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={sport}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text
              onPress={() =>
                navigation.navigate('SportsDetails', {details: item})
              }>
              <Image
                style={styles.image}
                source={{uri: `${item.strSportThumb}`}}
              />
              {item.strSport}
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
    height: 100,
    width: 250,
  },
});

export default SportScreen;
