const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  } else {
    members = members.filter(elem => typeof (elem) === 'string');
    return members.map(elem => elem.trimStart()[0].toUpperCase()).sort().join('');
  }
}
