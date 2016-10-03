import {expect} from 'chai';

import Client from '../src/index';
import Genre from '../src/data/Genre';
import Taxonomy from '../src/data/Taxonomy';

import QueryParameterBuilder from '../src/data/request/query/QueryParameterBuilder';
import Unit from '../src/data/Unit';
import SortOption from '../src/data/request/query/SortOption';
import SortDirection from '../src/data/request/query/SortDirection';
import FilterOption from '../src/data/request/query/FilterOption';
import Operator from '../src/data/request/query/Operator';
import FilterQuery from '../src/data/request/query/FilterQuery';

import exampleTaxonomies from './files/taxonomies.json';

describe('Test Client', function() {
  let cityName = 'Boston';
  let stateCode = 'MA';
  let countryCode = 'US';
  let postalCode = '02143';
  let queryString = 'jae';
  let latitude = 1;
  let longitude = 2;
  let range = 3;
  let unit = Unit.MILE;
  let perPage = 4;
  let page = 5;
  let taxonomy1 = Taxonomy.SPORTS;
  let taxonomy2 = Taxonomy.NFL_FOOTBALL;
  let taxonomies = [taxonomy1, taxonomy2];
  let taxonomyIds = [taxonomy1.id, taxonomy2.id];
  let performerSlug1 = 'new-england-patriots';
  let performerSlug2 = 'boston-red-sox';
  let performerSlugs = [performerSlug1, performerSlug2];
  let venueId1 = 33; // Gillette
  let venueId2 = 21; // Fenway
  let venueIds = [venueId1, venueId2];
  let sortOption = SortOption.SCORE;
  let sortDirection = SortDirection.DESCENDING;
  let filterOption1 = FilterOption.LISTING_COUNT;
  let filterOption2 = FilterOption.LOWEST_PRICE;
  let filterOperator = Operator.GREATER_THAN_OR_EQUAL_TO;
  let filterValue1 = 1;
  let filterValue2 = 10;
  let filterQuery1 = new FilterQuery(filterOption1, filterOperator, filterValue1);
  let filterQuery2 = new FilterQuery(filterOption2, filterOperator, filterValue2);
  let filterQueries = [filterQuery1, filterQuery2];

  it('tests genres fetch', function() {
    return Client.getGenres(150)
                 .then(response => expect(response.body.genres.length).to.equal(Genre.enumValues.length));
  });

  it('tests taxonomies fetch', function() {
    return Client.getTaxonomies(100)
                 .then(response => expect(response.body.taxonomies.length).to.equal(Taxonomy.enumValues.length));
  });

  it('tests venues fetch', function() {
    return Client.getVenues('Boston')
                 .then(response => console.log(response));
  });

  it('tests clients fetch', function() {
    return Client.getEvents(taxonomies, performerSlugs, venueIds, cityName, stateCode, countryCode, postalCode, undefined, false,
      latitude, longitude, range, unit, SortOption.SCORE, SortDirection.DESCENDING, filterQueries, perPage, page)
                 .then(response => console.log(response))
  })
});
