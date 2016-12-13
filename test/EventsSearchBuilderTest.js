'use es6';

import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import {List} from 'immutable';

import Filter from '../src/query/events/filter/Filter';
import FilterOption from '../src/query/events/filter/FilterOption';
import Operator from '../src/query/events/filter/Operator';
import Unit from '../src/data/Unit';
import EventsSearch from '../src/query/events/EventsSearch';
import PerformerField from '../src/query/performer/PerformerField';
import PerformerFilter from '../src/query/performer/PerformerFilter';
import PerformerSpecificity from '../src/query/performer/PerformerSpecificity';
import SortFilter from '../src/query/events/sort/SortFilter';
import SortOption from '../src/query/events/sort/SortOption';
import SortDirection from '../src/query/events/sort/SortDirection';
import VenuesFilter from '../src/query/events/venue/VenuesFilter';

import EventsSearchBuilder from '../src/query/events/EventsSearchBuilder';

describe('Test Event Search Builder', function() {
  let id1 = 1;
  let id2 = 2;
  let id3 = 3;
  let ids = [id1, id2, id3];
  let value1 = 1;
  let value2 = 2;
  it('tests venues filter building', function() {
    let cityName = 'Boston';
    let stateCode = 'MA';
    let countryCode = 'USA';
    let postalCode = '1234';
    let venuesFilterJson = {
      ids: ids,
      cityName: cityName,
      stateCode: stateCode,
      countryCode: countryCode,
      postalCode: postalCode
    };
    let expectedVenuesFilter = new VenuesFilter({
      ids: List(ids),
      cityName: cityName,
      stateCode: stateCode,
      countryCode: countryCode,
      postalCode: postalCode
    });
    let createdVenuesFilter = EventsSearchBuilder.buildVenuesFilter(venuesFilterJson);
    chai.expect(createdVenuesFilter).to.eql(expectedVenuesFilter);
  });

  it('tests performers filter building', function() {
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
    let filterJson = {
      'option': SortOption.SCORE,
      'direction': SortDirection.ASCENDING,
    };
    let expectedFilter = new SortFilter(filterJson);
    chai.expect(EventsSearchBuilder.buildSortFilter(filterJson)).to.eql(expectedFilter);
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
});
