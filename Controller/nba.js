
let unirest = require('unirest');


function basketBall(req, res) {
let unirest = require("unirest");
req = unirest("GET",'https://free-nba.p.rapidapi.com/games');
req.headers({
    "x-rapidapi-host": 'free-nba.p.rapidapi.com',
    "x-rapidapi-key": '56329c60admsh194ed4c62c7433ep13b95bjsn5063b035ff93'
});
req.end(function (response) {
  if (response.error) throw new Error(response.error);
  if (response.status == 200) {
      let games = [];
      let dataArray = response.body;
      let allData = dataArray.data;

        allData.forEach(data => {
      let date = data.date;
      let home_team = data.home_team.full_name;
      let home_team_score = data.home_team_score;
      let status = data.status;
      let season = data.season;
      let visitor_team = data.visitor_team.full_name;
      let visitor_team_score = data.visitor_team_score;
      let allGames = {
         date,
         home_team,
         home_team_score,
         status,
         season,
         visitor_team,
         visitor_team_score
       }
      games.push(allGames)
  });
  return res.status(200).json(games);
 }
 });
}
module.exports = basketBall;