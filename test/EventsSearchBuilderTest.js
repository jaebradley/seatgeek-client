'use es6';

import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import {List} from 'immutable';

import Filter from '../src/data/request/query/Filter';
import FilterOption from '../src/data/request/query/FilterOption';
import Operator from '../src/data/request/query/Operator';
import Unit from '../src/data/Unit';
import EventsSearch from '../src/data/request/query/EventsSearch';
import PerformerField from '../src/data/request/query/PerformerField';
import PerformerFilter from '../src/data/request/query/PerformerFilter';
import PerformerSpecificity from '../src/data/request/query/PerformerSpecificity';
import VenuesFilter from '../src/data/request/query/VenuesFilter';

import EventsSearchBuilder from '../src/data/request/query/builders/EventsSearchBuilder';

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
});
