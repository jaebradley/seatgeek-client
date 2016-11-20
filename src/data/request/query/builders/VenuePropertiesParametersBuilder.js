'use es6';

export default class VenuePropertiesParametersBuilder {
  static build(query) {
    return {
      city: query.city,
      state: query.state,
      country: query.country,
      postal_code: query.postalCode,
    };
  }
}
