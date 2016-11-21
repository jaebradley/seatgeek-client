'use es6';

import {List} from 'immutable';

import GenreFilter from '../GenreFilter';

export default class GenreFiltersParametersBuilder {
  static build(filters) {
    let parameters = {};
    for (var i = 0; i < filters.length; i++) {
      let filter = filters[i];

      if (!(filter instanceof GenreFilter)) {
        throw new Error('all elements must be a a valid genre filter');
      }

      let parameterName = GenreFiltersParametersBuilder.buildParameterName(filter);
      let parameterValues = [];

      if (parameterName in parameters) {
        parameterValues = parameters[parameterName];
      }

      parameterName.push(GenreFiltersParametersBuilder.getParameterValue(filter));
      parameters[parameterName] = parameterValues;
    }

    return List.of(parameters);
  }

  static buildParameterName() {
    if (this.isPrimary) {
      return 'genres[primary].slug';
    }

    return 'genres.slug';
  }

  static getParameterValue() {
    return this.genre.slug;
  }
};
