'use es6';

import {List, Map} from 'immutable';

import GenreFilter from '../GenreFilter';

export default class GenreFiltersParametersBuilder {
  static build(filters) {
    let parameters = new Map();
    filters.forEach(function(filter) {
      let parameterName = GenreFiltersParametersBuilder.getParameterName(filter);
      let parameterValues = parameters.has(parameterName) ? parameters.get(parameterName) : new List();
      parameterValues = parameterValues.push(GenreFiltersParametersBuilder.getParameterValue(filter));
      parameters = parameters.set(parameterName, parameterValues);
    });

    return parameters;
  }

  static getParameterName(filter) {
    return filter.isPrimary ? GenreFiltersParametersBuilder.getPrimaryGenreParameterName()
                            : GenreFiltersParametersBuilder.getGenreParameterName();
  }

  static getParameterValue(filter) {
    return filter.genre.slug;
  }

  static getPrimaryGenreParameterName() {
    return 'genres[primary].slug';
  }

  static getGenreParameterName() {
    return 'genres.slug';
  }
};
