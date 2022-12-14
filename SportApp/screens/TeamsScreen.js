import * as React from 'react';
import {
  Image,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
} from 'react-native';

import {getTeamsData} from '../database/Handlers';
import {
  FacebookSocialButton,
  InstagramSocialButton,
  TwitterSocialButton,
} from 'react-native-social-buttons';

function TeamScreen({navigation}) {
  const [isLoading, setLoading] = React.useState(false);
  const [teams, setTeams] = React.useState([]);

  React.useEffect(() => {
    getTeamsData(setTeams, setLoading);
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      <Text style={{alignSelf: 'center', padding: 10}}>
        <FacebookSocialButton />
        <InstagramSocialButton />
        <TwitterSocialButton />
      </Text>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={teams.teams}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text>
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
