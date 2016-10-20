'use es6';

import {expect} from 'chai';

import QueryParameterBuilder from '../src/data/request/query/QueryParameterBuilder';
import Taxonomy from '../src/data/Taxonomy';
import Genre from '../src/data/Genre';
import Unit from '../src/data/Unit';
import PerformerField from '../src/data/PerformerField';
import TaxonomyField from '../src/data/TaxonomyField';
import PerformerSpecificity from '../src/data/PerformerSpecificity';
import SortOption from '../src/data/request/query/SortOption';
import SortDirection from '../src/data/request/query/SortDirection';
import FilterOption from '../src/data/request/query/FilterOption';
import Operator from '../src/data/request/query/Operator';
import FilterQuery from '../src/data/request/query/FilterQuery';
import PerformerEventQueryParameter from '../src/data/request/query/PerformerEventQueryParameter';
import TaxonomyEventQueryParameter from '../src/data/request/query/TaxonomyEventQueryParameter';

describe('Test QueryParameterBuilder', function() {
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

  it('tests venue query parameters', function() {
    let expectedDefaultParameters = {
      city: undefined,
      state: undefined,
      country: undefined,
      postal_code: undefined,
      q: undefined,
      geoIp: true,
      lat: undefined,
      lon: undefined,
      range: '1mi',
      per_page: perPage,
      page: page,
    };
    expect(QueryParameterBuilder.buildVenueQueryParameters(undefined, undefined, undefined, undefined,
                                                           undefined, true, undefined, undefined,
                                                           1, Unit.MILE, perPage, page)).to.eql(expectedDefaultParameters);

   let expectedCustomParameters = {
     city: cityName,
     state: stateCode,
     country: countryCode,
     postal_code: postalCode,
     q: queryString,
     geoIp: undefined,
     lat: latitude,
     lon: longitude,
     range: '3mi',
     per_page: perPage,
     page: page,
   };

   expect(QueryParameterBuilder.buildVenueQueryParameters(cityName, stateCode, countryCode, postalCode,
                                                          queryString, false, latitude, longitude,
                                                          range, unit, perPage, page)).to.eql(expectedCustomParameters);
  });

  it('tests performer query parameters', function() {
    let expectedDefaultParameters = {
      id: [],
      slug: undefined,
      'genres[primary].slug': [],
      'genres.slug': [],
      'taxonomies.id': [],
      'taxonomies.parent_id': [],
      q: undefined,
      per_page: perPage,
      page: page,
    };
    expect(QueryParameterBuilder.buildPerformerQueryParameters([], undefined, [], [], [],
                                                               [], undefined, perPage, page)).to.eql(expectedDefaultParameters);

    let ids = [1, 2, 3, 4];
    let slug = 'jae';
    let genre1 = Genre.COUNTRY;
    let genre2 = Genre.ROCK;
    let genre3 = Genre.POP;
    let taxonomy1 = Taxonomy.NFL_FOOTBALL;
    let taxonomy2 = Taxonomy.NBA_BASKETBALL;
    let taxonomy3 = Taxonomy.SPORTS;
    let primaryGenres = [genre1, genre2];
    let primaryGenreSlugs = [genre1.slug, genre2.slug];
    let otherGenres = [genre3];
    let otherGenresSlug = [genre3.slug];
    let taxonomies = [taxonomy1, taxonomy2];
    let taxonomyIds = [taxonomy1.id, taxonomy2.id];
    let parentTaxonomies = [taxonomy3];
    let parentTaxonomyIds = [taxonomy3.id];
    let expectedCustomParameters = {
      id: ids,
      slug: slug,
      'taxonomies.id': taxonomyIds,
      'taxonomies.parent_id': parentTaxonomyIds,
      'genres[primary].slug': primaryGenreSlugs,
      'genres.slug': otherGenresSlug,
      q: queryString,
      per_page: perPage,
      page: page,
    };
    expect(QueryParameterBuilder.buildPerformerQueryParameters(ids, slug, primaryGenres, otherGenres,
      taxonomies, parentTaxonomies, queryString, perPage, page)).to.eql(expectedCustomParameters);
  });

  it('tests event query parameters', function() {
    let expectedDefaultParameters = {
      'venue.id': [],
      'venue.city': undefined,
      'venue.state': undefined,
      'venue.country': undefined,
      'venue.postal_code': undefined,
      'sort': 'score.desc',
      geoIp: true,
      lat: undefined,
      lon: undefined,
      range: '3mi',
      per_page: perPage,
      page: page,
    };

    expect(QueryParameterBuilder.buildEventsQueryParameters([], [], [], undefined, undefined, undefined, undefined, true,
      undefined, undefined, range, unit, SortOption.SCORE, SortDirection.DESCENDING, [], perPage, page)).to.eql(expectedDefaultParameters);

    let taxonomy1 = Taxonomy.NFL_FOOTBALL;
    let taxonomy2 = Taxonomy.NBA_BASKETBALL;
    let taxonomy3 = Taxonomy.SPORTS;

    let taxonomyQueryParameter1 = new TaxonomyEventQueryParameter(taxonomy1);
    let taxonomyQueryParameter2 = new TaxonomyEventQueryParameter(taxonomy2, TaxonomyField.NAME);
    let taxonomyQueryParameter3 = new TaxonomyEventQueryParameter(taxonomy3, TaxonomyField.PARENT_ID);
    let taxonomyQueryParameters = [taxonomyQueryParameter1, taxonomyQueryParameter2, taxonomyQueryParameter3];
    let taxonomies = [taxonomyQueryParameter1, taxonomyQueryParameter2. taxonomyQueryParameter2];
    let taxonomyIds = [taxonomyQueryParameter1.taxonomy.id];
    let taxonomyNames = [taxonomyQueryParameter2.taxonomy.name];
    let parentTaxonomyIds = [taxonomyQueryParameter3.taxonomy.parent_id];

    let performerSlug1 = 'new-england-patriots';
    let performerSlug2 = 'boston-red-sox';
    let performerQueryParameter1 = new PerformerEventQueryParameter(performerSlug1, PerformerField.SLUG);
    let performerQueryParameter2 = new PerformerEventQueryParameter(performerSlug2, PerformerField.SLUG, PerformerSpecificity.HOME_TEAM);
    let performerQueryParameters = [performerQueryParameter1, performerQueryParameter2];
    let performerSlugs = [performerSlug1];
    let performerHomeTeamSlugs = [performerSlug2];

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

    let expectedCustomParameters = {
      'taxonomies.id': taxonomyIds,
      'taxonomies.name': taxonomyNames,
      'taxonomies.parent_id': parentTaxonomyIds,
      'performers[any].slug': performerSlugs,
      'performers[home_team].slug': performerHomeTeamSlugs,
      'venue.id': venueIds,
      'venue.city': cityName,
      'venue.state': stateCode,
      'venue.country': countryCode,
      'venue.postal_code': postalCode,
      'sort': 'score.desc',
      'listing_count.gte': 1,
      'lowest_price.gte': 10,
      geoIp: undefined,
      lat: latitude,
      lon: longitude,
      range: '3mi',
      per_page: perPage,
      page: page,
    };

    expect(QueryParameterBuilder.buildEventsQueryParameters(performerQueryParameters, taxonomyQueryParameters, venueIds, cityName, stateCode, countryCode, postalCode, false,
      latitude, longitude, range, unit, SortOption.SCORE, SortDirection.DESCENDING, filterQueries, perPage, page)).to.eql(expectedCustomParameters);
  });

  it('tests build taxonomy ids', function() {
    let taxonomy1 = Taxonomy.SPORTS;
    let taxonomy2 = Taxonomy.LITERARY;
    let defaultTaxonomies = [taxonomy1, taxonomy2];
    let expectedTaxonomyIds = [taxonomy1.id, taxonomy2.id];
    expect(QueryParameterBuilder.buildTaxonomyIds(defaultTaxonomies)).to.eql(expectedTaxonomyIds);
    expect(QueryParameterBuilder.buildTaxonomyIds([])).to.eql([]);
  });

  it('tests exceptional cases when building taxonomy ids', function() {
    expect(() => QueryParameterBuilder.buildTaxonomyIds([1, 2, 3])).to.throw(Error);
  });

  it('tests building genre slugs', function() {
    let genre1 = Genre.ROCK;
    let genre2 = Genre.POP;
    let defaultGenres = [genre1, genre2];
    let expectedGenreSlugs = [genre1.slug, genre2.slug];
    expect(QueryParameterBuilder.buildGenreSlugs(defaultGenres)).to.eql(expectedGenreSlugs);
    expect(QueryParameterBuilder.buildGenreSlugs([])).to.eql([]);
  });

  it('tests exceptional cases when building genre slug', function() {
    expect(() => QueryParameterBuilder.buildGenreSlugs([1, 2, 3])).to.throw(Error);
  });
});
