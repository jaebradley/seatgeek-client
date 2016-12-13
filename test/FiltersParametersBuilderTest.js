'use es6';

import {expect} from 'chai';

import {List} from 'immutable';

import Operator from '../src/query/events/filter/Operator';
import FilterOption from '../src/query/events/filter/FilterOption';
import Filter from '../src/query/events/filter/Filter';
import FiltersParametersBuilder from '../src/query/events/filter/FiltersParametersBuilder';

describe('Tests Filters Parameters Builder', function() {
  let option = FilterOption.AVERAGE_PRICE;
  let operator = Operator.LESS_THAN;
  let value1 = 1;
  let value2 = 'jae';
  let filter = new Filter({
    option: option,
    operator: operator,
    value: value1,
  });

  let invalidTypeFilter = new Filter({
    option: option,
    operator: operator,
    value: value2,
  });

  let filters = List.of(filter);
  let invalidFilters = List.of(1);
  let invalidTypeFilters = List.of(invalidTypeFilter);

  it('tests filter parameter name creation', function() {
      let parameterName = FiltersParametersBuilder.buildParameterName(filter);
      expect(parameterName).to.equal('average_price.lt');
  });

  it('tests expected filter parameters creation', function() {
    let parameters = FiltersParametersBuilder.build(filters);
    let expectedParameters = {
      'average_price.lt': value1,
    };
    expect(parameters.toJS()).to.eql(expectedParameters);
  });

  it('tests incorrect filter type when creating parameters', function() {
    expect(() => FiltersParametersBuilder.build(invalidTypeFilters)).to.throw(TypeError);
  });
});
