const team = {
    _players: [
      {
        firstName: 'Daniel',
        lastName: 'Ingebrigtsen',
        age: 38
      },
      {
        firstName: 'Jonas',
        lastName: 'Ingebrigtsen',
        age: 37
      },
      {
        firstName: 'Thomas',
        lastName: 'Ingebrigtsen',
        age: 42
      },
    ],
    _games: [
      {
        opponent: 'Brøndby',
        teamPoints: 4,
        opponentPoints: 1
      },
      {
        opponent: 'FCK',
        teamPoints: 2,
        opponentPoint: 0
      },
      {
        opponent: 'Karlslunde',
        teamPoints: 2,
        opponentPoint: 3
      },
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },

    addPlayer(firstName, lastName, age) {
        let player = {
          firstName: firstName,
          lastName: lastName,
          age: age
        };
        this.players.push(player);
    },

    addGame(opponentName, yourScore, opponentScore) {
        let game = {
            opponent: opponentName,
            yourScore: yourScore,
            opponentScore: opponentScore
        };
        this.games.push(game);
    },
};
    team.addPlayer('Steph', 'Curry', 28)
    team.addPlayer('Lisa', 'Leslie', 44)
    team.addPlayer('Bugs', 'Bunny', 76)
    team.addGame('Hvidovre', 4, 2)
    team.addGame('Nordsjælland', 0, 2)
    team.addGame('Greve 2', 7, 1)


console.log(team._players);
console.log(team._games);