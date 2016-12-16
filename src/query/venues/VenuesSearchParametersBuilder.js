'use es6';

import {Map} from 'immutable';

import VenuesPropertiesParametersBuilder from '../VenuesPropertiesParametersBuilder';
import GeolocationParametersBuilder from '../GeolocationParametersBuilder';
import PaginationParametersBuilder from '../PaginationParametersBuilder';

import VenuesSearch from './VenuesSearch';

export default class VenuesSearchParametersBuilder {
  static build(search) {
    if (!(search instanceof VenuesSearch)) {
      throw new TypeError('expected a VenuesSearch');
    }

    let parameters = Map();
    if (search.ids.size > 0) {
      parameters = parameters.set('id', search.ids);
    }

    if (typeof search.queryString !== 'undefined') {
      parameters = parameters.set('q', search.queryString);
    }

    parameters = parameters.merge(VenuesPropertiesParametersBuilder.build(search.venues),
                                  GeolocationParametersBuilder.build(search),
                                  PaginationParametersBuilder.build(search));
    return parameters;
  }
}
