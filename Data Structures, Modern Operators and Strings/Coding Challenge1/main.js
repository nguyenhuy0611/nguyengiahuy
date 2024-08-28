const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Suele',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Muller',
            'Gnabry',
            'Lewandowski'
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            // ...
        ]
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Muller'],
    date: 'Nov 9th, 2019',
    odds: {
        team1: 1.33,
        draw: 5.3,
        team2: 6.5
    }
};

const [players1, players2] = game.players;

const gk = players1[0];
const fieldPlayers = players1.slice(1);

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const { team1: team1Odds, draw: drawOdds, team2: team2Odds } = game.odds;

function printGoals(...players) {
    console.log(`${players.length} goals were scored by:`);
    players.forEach(player => {
        console.log(`- ${player}`);
    });
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');