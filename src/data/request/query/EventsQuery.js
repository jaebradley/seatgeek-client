'use es6';

import {List, Record} from 'immutable';

import SortOption from '../../SortOption';
import SortDirection from '../../SortDirection';

let defaults = {
  performers: new List(),
  taxonomies: new List(),
  venueIds: [],
  cityName: undefined,
  stateCode: undefined,
  countryCode: undefined,
  postalCode: undefined,
  queryString: undefined,
  useIpAddress: true,
  latitude: undefined,
  longitude: undefined,
  range: 10,
  unit: Unit.MILE,
  sortOption: SortOption.SCORE,
  sortDirection: SortDirection.DESCENDING,
  filters: new List(),
  perPage: 100,
  page: 1,

}

export default class EventsQuery extends Record(defaults) {
}
