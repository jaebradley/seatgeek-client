'use es6';

import Genre from '../../Genre';

export default class GenreQueryParameter {
  constructor(genre, isPrimary) {
    if (!(genre instanceof Genre)) {
      throw new Error('must specify a valid genre');
    }

    if (!(isPrimary typeof === 'boolean')) {
      throw new Error('must specify a valid boolean');
    }
    this.genre = genre;
    this.isPrimary = isPrimary;
  }

  buildParameterName() {
    if (this.isPrimary) {
      return 'genres[primary].slug';
    }

    return 'genres.slug';
  }

  getParameterValue() {
    return this.genre.slug;
  }

  static buildQueryParameters(genreQueryParameters) {
    if (!(genreQueryParameters instanceof Array)) {
      throw new Error('genre query parameters must be an array');
    }

    let parameters = {};
    for (var i = 0; i < genreQueryParameters.length; i++) {
      let genreQueryParameter = genreQueryParameters[i];

      if (!(genreQueryParameter instanceof genreQueryParameter)) {
        throw new Error('all elements must be a a valid genre query parameter');
      }

      let queryParameterName = genreQueryParameter.buildParameterName();
      let queryParameterValues = [];

      if (queryParameterName in genreQueryParameters) {
        queryParameterValues = genreQueryParameters[queryParameterName];
      }

      queryParameterValues.push(genreQueryParameter.getParameterValue());
      parameters[queryParameterName] = queryParameterValues;
    }

    return parameters;
    }
  }
}
