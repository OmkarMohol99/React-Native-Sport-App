import axios from 'axios';
import * as qs from 'qs';
// LeaguesScreen
export const getLeagueData = async (setLeague, setLoading) => {
  try {
    setLoading(true);

    const resp = await axios.get(
      'https://www.thesportsdb.com/api/v1/json/2/all_leagues.php',
    );
    setLoading(false);
    setLeague(resp.data);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

//SportsScreen
export const getSportsData = async (setSport, setLoading) => {
  try {
    setLoading(true);
    const resp = await axios.get(
      'https://www.thesportsdb.com/api/v1/json/2/all_sports.php',
    );
    setLoading(false);
    setSport(resp.data);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

//TeamsScreen
export const getTeamsData = async (setTeams, setLoading, leagueName) => {
  try {
    setLoading(true);
    const queryName = qs.stringify({l: leagueName});
    console.log(
      'https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?' +
        queryName,
    );
    const resp = await axios.get(
      'https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?' +
        queryName,
    );
    setLoading(false);
    setTeams(resp.data.teams);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};
