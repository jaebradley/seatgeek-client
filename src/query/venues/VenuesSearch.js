'use es6';

import {List, Record} from 'immutable';

import Constants from '../../data/Constants';
import Geolocation from '../Geolocation';
import Pagination from '../Pagination';
import VenuesProperties from '../VenuesProperties';

let defaults = {
  properties: new VenuesProperties(),
  geolocation: new Geolocation(),
  pagination: new Pagination(),
};

export default class VenuesSearch extends Record(defaults) {
};
