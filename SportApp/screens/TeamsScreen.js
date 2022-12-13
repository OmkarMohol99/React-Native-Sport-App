import * as React from 'react';
import {
  Image,
  Text,
  View,
  Button,
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

function TeamScreen() {
  const [isLoading, setLoading] = React.useState(true);
  const [teams, setTeams] = React.useState([]);

  const getTeams = async () => {
    try {
      const response = await fetch(
        'https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=Indian%20Premier%20League',
      );
      const json = await response.json();
      setTeams(json.teams);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  //   const getTeams = () => {
  //     axios({
  //       url: 'https://www.thesportsdb.com/api/v1/json/2/all_sports.php',
  //       method: 'GET',
  //     }).then(res => {
  //       var response = res.data;
  //       setTeams(response.teams);
  //     });
  //   };

  React.useEffect(() => {
    getTeams();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Facebook</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.text}>Instagram</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Twitter</Text>
      </Pressable>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={teams}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text>
              {item.strTeam}
              {'\n'}

              <Image
                style={styles.image}
                source={{uri: `${item.strTeamLogo}`}}
              />
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {item.strStadiumDescription}
            </Text>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    height: 100,
    width: 250,
  },
});

export default TeamScreen;
