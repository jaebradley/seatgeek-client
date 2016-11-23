'use es6';

import {List, Record} from 'immutable';

import Pagination from '../../Pagination';
import SortFilter from '../../SortFilter';
import Geolocation from '../../Geolocation';

let defaults = {
  venues: new VenuesFilter(),
  performers: new PerformersFilter(),
  taxonomies: new List(),
  geolocation: new Geolocation(),
  sort: new SortFilter(),
  filters: new List(),
  pagination: new Pagination(),
};

export default class EventsSearch extends Record(defaults) {
}
