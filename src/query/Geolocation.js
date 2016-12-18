'use es6';

import {List, Record} from 'immutable';

import Constants from '../data/Constants';

let defaults = {
  useIpAddress: false,
  latitude: undefined,
  longitude: undefined,
  range: Constants.getDefaultRange(),
  unit: Constants.getDefaultUnit(),
};

export default class Geolocation extends Record(defaults) {
}
