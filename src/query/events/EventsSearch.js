'use es6';

import {List, Record} from 'immutable';

import SortFilter from './sort/SortFilter';
import Geolocation from '../Geolocation';
import VenuesFilter from './venue/VenuesFilter';
import Constants from '../../data/Constants';

let defaults = {
  ids: List(),
  venueIds: List(),
  cityName: undefined,
  stateCode: undefined,
  countryCode: undefined,
  postalCode: undefined,
  performers: List(),
  taxonomies: List(),
  filters: List(),
  sort: new SortFilter(),
  useIpAddress: undefined,
  latitude: undefined,
  longitude: undefined,
  range: Constants.getDefaultRange(),
  unit: Constants.getDefaultUnit(),
  perPage: Constants.getDefaultPerPage(),
  page: Constants.getDefaultPage(),
};

export default class EventsSearch extends Record(defaults) {
}
