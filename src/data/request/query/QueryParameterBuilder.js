'use es6';

import Unit from '../../Unit';

export default class QueryParameterBuilder{

  static buildVenueQueryParameters(cityName, stateCode, countryCode, postalCode,
                                   queryString, geoIp, latitude, longitude,
                                   address, range, unit, perPage, page) {
    let queryParameters = QueryParameterBuilder.buildGeolocationParameters(geoIp, latitude, longitude, range, unit);
    Objects.assign(queryParameters,
                   QueryParameterBuilder.buildPlaceParameters(cityName, stateCode, countryCode, postalCode, queryString),
                   QueryParameterBuilder.buildPageParameters(perPage, page));

    return queryParameters;
  }

  static buildPerformerQueryParameters(ids, slug, primaryGenres, otherGenres, taxonomies, perPage, page) {
    let queryParameters = QueryParameterBuilder.buildPerformerAttributeParameters(ids, slug, primaryGenres, otherGenres, taxonomies);
    Objects.assign(queryParameters, QueryParameterBuilder.buildPageParameters(perPage, page));

    return queryParameters;
  }

  static buildPerformerAttributeParameters(ids, slug, primaryGenres, otherGenres, taxonomies) {
    let primaryGenreSlugs = [];
    primaryGenres.forEach(genre => primaryGenreSlugs.push(genre.value));

    let otherGenreSlugs = [];
    otherGenres.forEach(genre => otherGenreSlugs.push(genre.value));

    let taxonomyIds = [];
    taxonomies.forEach(taxonomy => taxonomyIds.push(taxonomy.id));

    return {
      'id': ids,
      'taxonomies.id': taxonomyIds,
      'genres[primary].slug': primaryGenreSlugs,
      'genres.slug': otherGenreSlugs,
    }
  }

  static buildPageParameters(perPage, page) {
    if (typeof perPage !== 'number') {
      throw new Error('perPage must be a number');
    }

    if (typeof page !== 'number') {
      throw new Error('page must be a number');
    }

    return {
      per_page: perPage,
      page: page,
    };
  }

  static buildGeolocationParameters(geoIp, latitude, longitude, range, unit) {
    if (typeof geoIp !== 'boolean') {
      throw new Error('geoIp must be a boolean');
    }

    if (geoIp) {
      latitude = undefined;
      longitude = undefined;
    }

    if (((typeof latitude === 'undefined') && (typeof longitude !== 'undefined'))
      || ((typeof latitude !== 'undefined') && (typeof longitude === 'undefined'))) {
        throw new Error('latitude and longitude must both be defined');
    }

    if ((typeof latitude !== 'undefined') && (typeof latitude !== 'number')) {
      throw new Error('defined latitude must have a numeric value');
    }

    if ((typeof longitude !== 'undefined') && (typeof longitude !== 'number')) {
      throw new Error('defined longitude must have a numeric value');
    }

    if (typeof range !== 'number') {
      throw new Error('range must have a numeric value');
    }

    if (typeof unit !== 'unit') {
      throw new Error('unit must be a Unit value');
    }

    return {
      geoIp: geoIp,
      lat: latitude,
      lon: longitude,
      range: String(range) + unit.value,
    };
  }

  static buildPlaceParameters(cityName, stateCode, countryCode, postalCode, queryString) {
      if ((typeof cityName !== 'undefined') && (typeof cityName !== 'string')) {
        throw new Error('cityName must be a string value');
      }

      if ((typeof stateCode !== 'undefined') && (typeof stateCode !== 'string')) {
        throw new Error('stateCode must be a string of length 2');
      }

      if ((typeof stateCode === 'string') && (stateCode.length != 2)) {
        throw new Error('stateCode must be a string of length 2');
      }

      if ((typeof countryCode !== 'undefined') && (typeof countryCode !== 'string')) {
        throw new Error('countryCode must be a string of length 2');
      }

      if ((typeof countryCode === 'string') && (countryCode.length != 2)) {
        throw new Error('countryCode must be a string of length 2');
      }

      if ((typeof postalCode !== 'undefined') && (typeof postalCode !== 'string')) {
        throw new Error('postalCode must be a string value');
      }

      if ((typeof queryString !== 'undefined') && (typeof queryString !== 'string')) {
        throw new Error('queryString must be a string value');
      }

      return {
        city: cityName,
        state: stateCode,
        country: countryCode,
        postal_code: postalCode,
        q: queryString,
      };
    }
};
