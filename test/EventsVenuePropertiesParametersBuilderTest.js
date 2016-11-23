'use es6';

import {expect} from 'chai';

import EventsVenuePropertiesParametersBuilder from '../src/data/request/query/builders/EventsVenuePropertiesParametersBuilder';
import VenueProperties from '../src/data/request/query/VenueProperties';

describe('Test Events Venue Properties Parameters Builder', function() {
  it('tests properties', function() {
    let properties = new VenueProperties({
      cityName: 'Boston',
      stateCode: 'MA',
      countryCode: 'US',
      postalCode: '02122',
    });
    let parameters = EventsVenuePropertiesParametersBuilder.build(properties);
  });
});
