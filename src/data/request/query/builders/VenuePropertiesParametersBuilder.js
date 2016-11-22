'use es6';

export default class VenuePropertiesParametersBuilder {
  static build(query) {
    return {
      city: query.cityName,
      state: query.stateCode,
      country: query.countryCode,
      postal_code: query.postalCode,
    };
  }
}
