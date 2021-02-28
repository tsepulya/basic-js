const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members === undefined || members === []) {
    return null;
  } else if (typeof (members) !== 'string' && typeof (members) !== 'object') {
    return false;
  } else {
    members = members.filter(elem => typeof (elem) === 'string');
    return members.map(elem => elem[0].toUpperCase()).sort().join('');
  }
}
