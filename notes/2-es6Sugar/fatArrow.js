// Fat arrow is pretty self explanitory, but there is a good case for it in the wild.

// const team = {
//   members: ['Bill', 'Jane'],
//   teamName: 'Best team',
//   teamSummary: function() {
//     return this.members.map(member =>  {
//       return `${member} is on ${this.teamName}`;
//     });
//   }
// };
//
// console.log(team.teamSummary());


const team = {
  members: ['Bill', 'Jane'],
  teamName: 'Best team',
  teamSummary: function() {
    return this.members.map(member => { // Using fat arrow right here gets rid of lexical problems of using the this keyword.  Lexical this is the fancy term. 
        return `${member} is a member of team ${this.teamName}`;
    });
  }
};

console.log(team.teamSummary());
