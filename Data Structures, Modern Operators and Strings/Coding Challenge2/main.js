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
for (let i = 0; i < game.scored.length; i++) {
    console.log(`Bàn thắng ${i + 1}: ${game.scored[i]}`);
}

const oddsValues = Object.values(game.odds);
let sumOdds = 0;
for (let odd of oddsValues) {
    sumOdds += odd;
}
const averageOdd = sumOdds / oddsValues.length;
console.log(`Tỷ lệ cược trung bình: ${averageOdd}`);

const { team1, draw, team2 } = game.odds;
console.log(`Tỷ lệ cược chiến thắng ${game.team1}: ${team1}`);
console.log(`Tỷ lệ cược hòa: ${draw}`);
console.log(`Tỷ lệ cược chiến thắng ${game.team2}: ${team2}`);

const scorers = {};
for (const player of game.scored) {
    scorers[player] = scorers[player] ? scorers[player] + 1 : 1;
}
console.log(scorers);