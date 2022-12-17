import * as React from 'react';
import {
  Image,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Linking,
} from 'react-native';

import {getTeamsData} from '../database/Handlers';
import {useRoute} from '@react-navigation/native';

function TeamScreen({navigation}) {
  const [isLoading, setLoading] = React.useState(false);
  const [teams, setTeams] = React.useState([]);
  const route = useRoute();
  // console.log(route.params)
  const team = route.params['teams'];
  // console.log(teams)

  React.useEffect(() => {
    getTeamsData(setTeams, setLoading, team.strLeague);
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={teams}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text style={{borderBottomColor: 'purple', borderBottomWidth: 2}}>
              <Image
                style={styles.image}
                source={{uri: `${item.strTeamLogo}`}}
              />
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              <Text style={styles.text}>- {item.strTeam}</Text>
              {'\n'}
              {'\n'}
              <Text style={styles.description_text}>
                {item.strStadiumDescription}
              </Text>
              {'\n'}
              {'\n'}

              <Text style={{alignSelf: 'center', padding: 10}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    backgroundColor: '#3b5998',
                    color: 'white',
                  }}
                  onPress={() => {
                    Linking.openURL(`https://${item.strFacebook}`);
                  }}>
                  FACEBOOK
                </Text>

                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    backgroundColor: '#d62976',
                    color: 'white',
                  }}
                  onPress={() => {
                    Linking.openURL(`https://${item.strInstagram}`);
                  }}>
                  INSTAGRAM
                </Text>

                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    backgroundColor: '#1DA1F2',
                    color: 'white',
                  }}
                  onPress={() => {
                    Linking.openURL(`https://${item.strTwitter}`);
                  }}>
                  TWITTER
                </Text>
              </Text>
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
    height: 130,
    width: 320,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  description_text: {
    fontSize: 16,
    lineHeight: 21,
    // fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});

export default TeamScreen;
