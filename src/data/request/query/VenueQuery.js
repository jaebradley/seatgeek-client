'use es6';

export default class VenueQuery {
  constructor(cityName, stateCode, countryCode, postalCode) {
    if ((typeof cityName !== 'undefined') && (typeof cityName !== 'string')) {
      throw new Error('cityName must be a string value');
    }

    if ((typeof stateCode !== 'undefined') && (typeof stateCode !== 'string')) {
      throw new Error('stateCode must be a string of length 2');
    }

    if ((typeof stateCode === 'string') && (stateCode.length != 2)) {
      throw new Error('stateCode must be a string of length 2');
    }

    if ((typeof countryCode !== 'undefined') && (typeof countryCode !== 'string')) {
      throw new Error('countryCode must be a string of length 2');
    }

    if ((typeof countryCode === 'string') && (countryCode.length != 2)) {
      throw new Error('countryCode must be a string of length 2');
    }

    if ((typeof postalCode !== 'undefined') && (typeof postalCode !== 'string')) {
      throw new Error('postalCode must be a string value');
    }

    this.cityName = cityName;
    this.stateCode = stateCode;
    this.countryCode = countryCode;
    this.postalCode = postalCode;
  }
}
