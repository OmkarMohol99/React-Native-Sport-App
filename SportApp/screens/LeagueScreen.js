import * as React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';
import {getLeagueData} from '../database/Handlers';

function LeagueScreen({navigation}) {
  const [isLoading, setLoading] = React.useState(false);
  const [league, setLeague] = React.useState([]);
  // console.log(league);

  React.useEffect(() => {
    getLeagueData(setLeague, setLoading);
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={league.leagues}
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
