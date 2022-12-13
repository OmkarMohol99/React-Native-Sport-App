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

function LeagueScreen({navigation}) {
  const [isLoading, setLoading] = React.useState(true);
  const [league, setLeague] = React.useState([]);

  const getLeague = async () => {
    try {
      const response = await fetch(
        'https://www.thesportsdb.com/api/v1/json/2/all_leagues.php',
      );
      const json = await response.json();
      setLeague(json.leagues);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  //   const getLeague = () => {
  //     axios({
  //       url: 'https://www.thesportsdb.com/api/v1/json/2/all_leagues.php',
  //       method: 'GET',
  //     }).then(res => {
  //       var response = res.data;
  //       setLeague(response.leagues);
  //     });
  //   };

  React.useEffect(() => {
    getLeague();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={league}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text
              style={styles.text}
              onPress={() => navigation.navigate('Teams')}>
              <Text style={styles.titleText}>LEAGUE NAME : </Text>
              {item.strLeague}
              {'\n'}
              <Text style={styles.titleText}>ALTERNATE LEAGUE NAME : </Text>
              {item.strLeagueAlternate}
              {'\n'}
            </Text>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 21,
    // fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'purple',
  },
});

export default LeagueScreen;
