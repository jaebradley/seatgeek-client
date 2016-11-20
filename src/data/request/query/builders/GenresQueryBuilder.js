'use es6';

import Genre from '../../../Genre';
import GenreQueryParameter from '../GenreQueryParameter';

export default class GenresQueryBuilder {
  static build(genreQueryParameters) {
    if (!(genreQueryParameters instanceof Array)) {
      throw new Error('genre query parameters must be an array');
    }

    let parameters = {};
    for (var i = 0; i < genreQueryParameters.length; i++) {
      let genreQueryParameter = genreQueryParameters[i];

      if (!(genreQueryParameter instanceof GenreQueryParameter)) {
        throw new TypeError('all elements must be a a valid genre query parameter');
      }

      let queryParameterName = genreQueryParameter.buildParameterName();
      let queryParameterValues = [];

      if (queryParameterName in parameters) {
        queryParameterValues = parameters[queryParameterName];
      }

      queryParameterValues.push(genreQueryParameter.getParameterValue());
      parameters[queryParameterName] = queryParameterValues;
    }

    return parameters;
  }
}
