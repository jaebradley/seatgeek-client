'use es6';

import {List, Record} from 'immutable';

import SortFilter from './sort/SortFilter';
import Geolocation from '../Geolocation';
import VenuesFilter from './venue/VenuesFilter';
import Constants from '../../data/Constants';

let defaults = {
  ids: List(),
  venues: new VenuesFilter(),
  performers: List(),
  taxonomies: List(),
  filters: List(),
  geolocation: new Geolocation(),
  sort: new SortFilter(),
  perPage: Constants.getDefaultPerPage(),
  page: Constants.getDefaultPage(),
};

export default class EventsSearch extends Record(defaults) {
}
