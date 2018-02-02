import axios from 'axios';

const id = 'fd8fbba6549c7cc239c9';
const secret = '2b11dea3fa501c73f74105119c8ed9518cec36bc';
const params = `?client_id=${id}&client_secret=${secret}`;

const getProfile = username =>
  axios.get(`https://api.github.com/users/${username}${params}`).then(user => user.data);

const getRepos = username =>
  axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`);

const getStarCount = repos => repos.data.reduce((count, repo) => count + repo.stargazers_count, 0);

const calculateScore = (profile, repos) => {
  const totalStars = getStarCount(repos);
  return profile.followers * 3 + totalStars;
};

const getUserData = player =>
  axios.all([getProfile(player), getRepos(player)]).then((data) => {
    const profile = data[0];
    const repos = data[1];

    return {
      profile,
      score: calculateScore(profile, repos),
    };
  });

const sortPlayers = players => players.slice().sort((a, b) => b.score - a.score);

const handleError = (error) => {
  console.warn(error);
  return null;
};

module.exports = {
  battle(players) {
    return axios
      .all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError);
  },
  fetchPopularRepos(language) {
    const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

    return axios.get(encodedURI).then((response) => {
      console.dir(response);

      return response.data.items;
    });
  },
};
