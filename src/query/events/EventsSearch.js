'use es6';

import {List, Record} from 'immutable';

import Geolocation from '../Geolocation';
import Pagination from '../Pagination';
import SortFilter from './sort/SortFilter';
import EventsVenuesProperties from './EventsVenuesProperties';

let defaults = {
  ids: List(),
  venues: new EventsVenuesProperties(),
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
