'use es6';

import {Record} from 'immutable';

import Constants from '../data/Constants';

let defaults = {
  useIpAddress: undefined,
  latitude: undefined,
  longitude: undefined,
  range: Constants.getDefaultRange(),
  unit: Constants.getDefaultUnit(),
};

export default class Geolocation extends Record(defaults) {
};
