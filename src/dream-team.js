const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0) {
    return false;
  }
  const realMembers = members.filter(
    (member) => typeof member === 'string' && member !== ' '
  );
  if (realMembers.length <= 0) {
    return false;
  }
  return realMembers
    .map((realMember) => realMember.trim().toUpperCase())
    .sort()
    .map((member) => member.slice(0, 1))
    .join('');
}

module.exports = {
  createDreamTeam,
};
