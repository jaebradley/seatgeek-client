'use es6';

import {expect} from 'chai';

import {List} from 'immutable';

import Unit from '../src/data/Unit';
import Taxonomy from '../src/data/Taxonomy';
import TaxonomyField from '../src/query/TaxonomyField';
import Pagination from '../src/query/Pagination';
import PerformerFilter from '../src/query/events/performer/PerformerFilter';
import PerformerField from '../src/query/events/performer/PerformerField';
import PerformerSpecificity from '../src/query/events/performer/PerformerSpecificity';
import Geolocation from '../src/query/Geolocation';
import SortOption from '../src/query/events/sort/SortOption';
import SortDirection from '../src/query/events/sort/SortDirection';
import SortFilter from '../src/query/events/sort/SortFilter';
import Operator from '../src/query/events/filter/Operator';
import FilterOption from '../src/query/events/filter/FilterOption';
import Filter from '../src/query/events/filter/Filter';
import EventsVenuesProperties from '../src/query/events/EventsVenuesProperties';
import EventsSearch from '../src/query/events/EventsSearch';
import TaxonomyFilter from '../src/query/TaxonomyFilter';
import EventsSearchParametersBuilder from '../src/query/events/EventsSearchParametersBuilder';

describe('Tests Events Search Parameters Builder', function() {
  let id1 = 1;
  let id2 = 2;
  let id3 = 3;
  let eventIds = List.of(id1, id2, id3);
  let venueId1 = 4;
  let venueId2 = 5;
  let venueId3 = 6;
  let venueIds = List.of(venueId1, venueId2, venueId3);
  let cityName = 'Boston';
  let stateCode = 'MA';
  let countryCode = 'US';
  let postalCode = '12345';
  let venues = new EventsVenuesProperties({
    ids: venueIds,
    cityName: cityName,
    stateCode: stateCode,
    countryCode: countryCode,
    postalCode: postalCode,
  });
  let performerValue1 = 7;
  let performerFilter1 = new PerformerFilter({
    value: performerValue1,
    field: PerformerField.ID,
    specificity: PerformerSpecificity.ANY,
  });
  let performerValue2 = 8;
  let performerFilter2 = new PerformerFilter({
    value: performerValue2,
    field: PerformerField.SLUG,
    specificity: PerformerSpecificity.PRIMARY,
  });
  let performerValue3 = 9;
  let performerFilter3 = new PerformerFilter({
    value: performerValue3,
    field: PerformerField.ID,
    specificity: PerformerSpecificity.HOME_TEAM,
  });
  let performerFilters = List.of(performerFilter1, performerFilter2, performerFilter3);

  let taxonomy1 = Taxonomy.NFL_FOOTBALL;
  let taxonomyField1 = TaxonomyField.ID;
  let taxonomyFilter1 = new TaxonomyFilter({
    taxonomy: taxonomy1,
    field: taxonomyField1,
  });
  let taxonomy2 = Taxonomy.NBA_BASKETBALL;
  let taxonomyField2 = TaxonomyField.NAME;
  let taxonomyFilter2 = new TaxonomyFilter({
    taxonomy: taxonomy2,
    field: taxonomyField2,
  });
  let taxonomy3 = Taxonomy.CONCERTS;
  let taxonomyField3 = TaxonomyField.PARENT_ID;
  let taxonomyFilter3 = new TaxonomyFilter({
    taxonomy: taxonomy3,
    field: taxonomyField3,
  });
  let taxonomyFilters = List.of(taxonomyFilter1, taxonomyFilter2, taxonomyFilter3);
  let useIpAddress = true;
  let latitude = 13;
  let longitude = 14;
  let range = 15;
  let unit = Unit.MILE;
  let geolocation = new Geolocation({
    useIpAddress: useIpAddress,
    latitude: latitude,
    longitude: longitude,
    range: range,
    unit: unit,
  });
  let sortDirection = SortDirection.ASCENDING;
  let sortOption = SortOption.SCORE;
  let sort = new SortFilter({
    direction: sortDirection,
    option: sortOption,
  });
  let filterValue1 = 16;
  let filterOption1 = FilterOption.AVERAGE_PRICE;
  let filterOperator1 = Operator.LESS_THAN;
  let filter1 = new Filter({
    option: filterOption1,
    operator: filterOperator1,
    value: filterValue1,
  });
  let filterValue2 = 17;
  let filterOption2 = FilterOption.LISTING_COUNT;
  let filterOperator2 = Operator.GREATER_THAN_OR_EQUAL_TO;
  let filter2 = new Filter({
    option: filterOption2,
    operator: filterOperator2,
    value: filterValue2,
  });
  let filters = List.of(filter1, filter2);
  let perPage = 18;
  let page = 19;

  let search = new EventsSearch({
    ids: eventIds,
    venues: venues,
    performers: performerFilters,
    taxonomies: taxonomyFilters,
    geolocation: geolocation,
    sort: sort,
    filters: filters,
    pagination: new Pagination({
      perPage: perPage,
      page: page
    })
  });

  it('tests events search parameter building', function() {
    let parameters = EventsSearchParametersBuilder.build(search);
    let filterName1 = filterOption1.value + '.' + filterOperator1.value;
    let filterName2 = filterOption2.value + '.' + filterOperator2.value;
    let expectedParameters = {
      id: [id1, id2, id3],
      'venue.id': [venueId1, venueId2, venueId3],
      'venue.city': cityName,
      'venue.state': stateCode,
      'venue.country': countryCode,
      'venue.postal_code': postalCode,
      'performers[any].id': [performerValue1],
      'performers[primary].slug': [performerValue2],
      'performers[home_team].id': [performerValue3],
      'taxonomies.id': [taxonomy1.id],
      'taxonomies.name': [taxonomy2.slug],
      'taxonomies.parent_id': [taxonomy3.parent_id],
      geoip: useIpAddress,
      lat: latitude,
      lon: longitude,
      range: '15mi',
      sort: 'score.asc',
      'average_price.lt': filterValue1,
      'listing_count.gte': filterValue2,
      per_page: perPage,
      page: page,
    };
    expect(parameters.toJS()).to.eql(expectedParameters);
  });
});
