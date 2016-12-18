'use es6';

import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import {List} from 'immutable';

import EventsVenuesProperties from '../src/query/events/EventsVenuesProperties';
import Geolocation from '../src/query/Geolocation';
import Filter from '../src/query/events/filter/Filter';
import FilterOption from '../src/query/events/filter/FilterOption';
import Operator from '../src/query/events/filter/Operator';
import Unit from '../src/data/Unit';
import EventsSearch from '../src/query/events/EventsSearch';
import Pagination from '../src/query/Pagination';
import PerformerField from '../src/query/events/performer/PerformerField';
import PerformerFilter from '../src/query/events/performer/PerformerFilter';
import PerformerSpecificity from '../src/query/events/performer/PerformerSpecificity';
import SortFilter from '../src/query/events/sort/SortFilter';
import SortOption from '../src/query/events/sort/SortOption';
import SortDirection from '../src/query/events/sort/SortDirection';
import Taxonomy from '../src/data/Taxonomy';
import TaxonomyField from '../src/query/TaxonomyField';
import TaxonomyFilter from '../src/query/TaxonomyFilter';
import VenuesProperties from '../src/query/VenuesProperties';

import EventsSearchBuilder from '../src/query/events/EventsSearchBuilder';

describe('Test Event Search Builder', function() {
  let id1 = 1;
  let id2 = 2;
  let id3 = 3;
  let ids = [id1, id2, id3];
  let value1 = 1;
  let value2 = 2;

  let performerFiltersJson = [
    {
      value: value1
    },
    {
      value: value2,
      field: PerformerField.ID,
      specificity: PerformerSpecificity.HOME_TEAM
    }
  ];
  let expectedPerformerFilters = List.of(
    new PerformerFilter({
      value: value1
    }),
    new PerformerFilter({
      value: value2,
      field: PerformerField.ID,
      specificity: PerformerSpecificity.HOME_TEAM
    }),
  );
  let filtersJson = [
    {
      value: value1
    },
    {
      value: value2,
      option: FilterOption.HIGHEST_PRICE,
      operator: Operator.LESS_THAN,
    }
  ];
  let expectedFilters = List.of(
    new Filter({
      value: value1
    }),
    new Filter({
      value: value2,
      option: FilterOption.HIGHEST_PRICE,
      operator: Operator.LESS_THAN,
    })
  );
  let sortJson = {
    'option': SortOption.SCORE,
    'direction': SortDirection.ASCENDING,
  };
  let expectedSort = new SortFilter(sortJson);
  it('tests performers filter building', function() {
    let createdPerformerFilters = EventsSearchBuilder.buildPerformerFilters(performerFiltersJson);
    chai.expect(createdPerformerFilters).to.eql(expectedPerformerFilters);
  });

  it('tests performer filter building error cases', function() {
    chai.expect(() => EventsSearchBuilder.buildPerformerFilters(1)).to.throw(TypeError);
    chai.expect(() => EventsSearchBuilder.buildPerformerFilters([{}])).to.throw(ReferenceError);

    let wrongPerformerField = [
      {
        value: value2,
        field: 'jaebaebae'
      }
    ];
    chai.expect(() => EventsSearchBuilder.buildPerformerFilters(wrongPerformerField)).to.throw(TypeError);
    let wrongSpecificityField = [
      {
        value: value2,
        specificity: 'jaebaebae'
      }
    ];
    chai.expect(() => EventsSearchBuilder.buildPerformerFilters(wrongSpecificityField)).to.throw(TypeError);
  });

  it('tests filters building', function() {
    let createdFilters = EventsSearchBuilder.buildFilters(filtersJson);
    chai.expect(createdFilters).to.eql(expectedFilters);
  });

  it('tests filter building error cases', function() {
    chai.expect(() => EventsSearchBuilder.buildFilters(1)).to.throw(TypeError);
    chai.expect(() => EventsSearchBuilder.buildFilters([{}])).to.throw(ReferenceError);

    let wrongOptionField = [
      {
        value: value2,
        option: 'jaebaebae'
      }
    ];
    chai.expect(() => EventsSearchBuilder.buildFilters(wrongOptionField)).to.throw(TypeError);
    let wrongOperatorField = [
      {
        value: value2,
        operator: 'jaebaebae'
      }
    ];
    chai.expect(() => EventsSearchBuilder.buildFilters(wrongOperatorField)).to.throw(TypeError);
  });

  it('tests sort filter builder', function() {
    chai.expect(EventsSearchBuilder.buildSortFilter(sortJson)).to.eql(expectedSort);
  });

  it('tests sort filter building error cases', function() {
    let wrongOption = {
      'option': 'jaebaebae'
    };
    chai.expect(() => EventsSearchBuilder.buildSortFilter(wrongOption)).to.throw(TypeError);

    let wrongDirection = {
      'direction': 'jaebaebae'
    };
    chai.expect(() => EventsSearchBuilder.buildSortFilter(wrongDirection)).to.throw(TypeError);
  });

  it('tests complete events search building', function() {
    let venueIds = [4, 5, 6];
    let cityName = 'Boston';
    let stateCode = 'MA';
    let countryCode = 'USA';
    let postalCode = '02112';
    let useIpAddress = false;
    let latitude = 6789;
    let longitude = 9876;
    let range = 11;
    let unit = Unit.MILE;
    let perPage = 12;
    let page = 13;
    let json = {
      ids: ids,
      venueIds: venueIds,
      performers: performerFiltersJson,
      taxonomies: [
        {
          taxonomy: Taxonomy.CONCERT,
          field: TaxonomyField.ID,
        }
      ],
      filters: filtersJson,
      sort: sortJson,
      cityName: cityName,
      stateCode: stateCode,
      countryCode: countryCode,
      postalCode: postalCode,
      useIpAddress: useIpAddress,
      latitude: latitude,
      longitude: longitude,
      range: range,
      unit: Unit.MILE,
      perPage: perPage,
      page: page
    };
    let expectedSearch = new EventsSearch({
      ids: ids,
      performers: expectedPerformerFilters,
      taxonomies: List.of(
        new TaxonomyFilter({
          taxonomy: Taxonomy.CONCERT,
          field: TaxonomyField.ID
        })
      ),
      filters: expectedFilters,
      sort: expectedSort,
      venues: new EventsVenuesProperties({
        ids: venueIds,
        cityName: cityName,
        stateCode: stateCode,
        countryCode: countryCode,
        postalCode: postalCode,
      }),
      geolocation: new Geolocation({
        useIpAddress: useIpAddress,
        latitude: latitude,
        longitude: longitude,
        range: range,
        unit: Unit.MILE,
      }),
      pagination: new Pagination({
        perPage: perPage,
        page: page
      })
    })
    chai.expect(EventsSearchBuilder.build(json))
  })
});
