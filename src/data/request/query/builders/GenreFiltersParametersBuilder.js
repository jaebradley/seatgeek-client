'use es6';

import {Map} from 'immutable';

import GenreFilter from '../GenreFilter';

export default class GenreFiltersParametersBuilder {
  static build(filters) {
    let parameters = {};
    for (var i = 0; i < filters.length; i++) {
      let filter = filters[i];

      if (!(filter instanceof GenreFilter)) {
        throw new TypeError('all elements must be a valid genre filter');
      }

      let parameterName = GenreFiltersParametersBuilder.buildParameterName(filter);
      let parameterValues = [];

      if (parameterName in parameters) {
        parameterValues = parameters[parameterName];
      }

      parameterName.push(GenreFiltersParametersBuilder.getParameterValue(filter));
      parameters[parameterName] = parameterValues;
    }

    return Map.of(parameters);
  }

  static buildParameterName(filter) {
    if (!(filter instanceof GenreFilter)) {
      throw new TypeError('Must be a valid genre filter');
    }

    if (filter.isPrimary) {
      return 'genres[primary].slug';
    }

    return 'genres.slug';
  }

  static getParameterValue(filter) {
    if (!(filter instanceof GenreFilter)) {
      throw new TypeError('Must be a valid genre filter');
    }

    return filter.genre.slug;
  }
};
