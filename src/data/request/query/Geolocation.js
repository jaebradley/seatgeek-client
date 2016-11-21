'use es6';

import {Record} from 'immutable';

import Unit from '../../Unit';

let defaults = {
  useIpAddress: true,
  latitude: undefined,
  longitude: undefined,
  range: 10,
  unit: Unit.MILE,
};

export default class GeolocationQuery extends Record(defaults) {
};
