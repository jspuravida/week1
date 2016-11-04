// module.exports = function makeUpperCase(text) {
//   return text.toUpperCase();

//     function makeReversed(text) {
//       return text.split('').reverse().join('');
//     }
// }

function doTheThing(name) {
  return name.split('').reverse().join('');
}
function makeUpperCase(name) {
  return doTheThing(name.toUpperCase());
}


module.exports = { makeUpperCase };