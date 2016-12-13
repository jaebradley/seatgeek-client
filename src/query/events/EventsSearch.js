'use es6';

import {List, Record} from 'immutable';

import Constants from '../../data/Constants';
import Geolocation from '../Geolocation';
import Pagination from '../Pagination';
import SortFilter from './sort/SortFilter';
import VenuesFilter from './venue/VenuesFilter';
import VenuesProperties from '../VenuesProperties';

let defaults = {
  ids: List(),
  venues: new VenuesProperties(),
  performers: List(),
  taxonomies: List(),
  filters: List(),
  sort: new SortFilter(),
  geolocation: new Geolocation(),
  queryString: undefined,
  pagination: new Pagination()
};

export default class EventsSearch extends Record(defaults) {
}
