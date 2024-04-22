const firstName = require("../country/state/city/index.js");
const utility = require("../utilities/utils/index.js");

let getPeopleInCity = (firstName) => {
  return utility(firstName);
};

module.exports = getPeopleInCity;
