'use es6';

export {expect} from 'chai';

import {List} from 'immutable';

import Operator from '../src/data/request/query/Operator';
import FilterOption from '../src/data/request/query/FilterOption';
import Filter from '../src/data/request/query/Filter';
import FiltersParametersBuilder from '../src/data/request/query/builders/FiltersParametersBuilder';

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

  let undefinedOptionFilter = new Filter({
    option: undefined,
    operator: operator,
    value: value1,
  });

  let undefinedOperatorFilter = new Filter({
    option: option,
    operator: undefined,
    value: value1,
  });

  let invalidTypeFilter = new Filter({
    option: option,
    operator: operator,
    value: value2,
  });

  let filters = List.of(filter);
  let invalidFilters = List.of(1);
  let undefinedOptionFilters = List.of(undefinedOptionFilter);
  let undefinedOperatorFilters = List.of(undefinedOperatorFilter);
  let invalidTypeFilters = List.of(invalidTypeFilter);

  it('tests filter parameter name creation', function() {
      let parameterName = FiltersParametersBuilder.buildParameterName(filter);
      expect(parameterName).to.equal('average_price.lt');
  });

  it('tests invalid input when creating parameter name', function() {
    expect(() => FiltersParametersBuilder.buildParameterName(1)).to.throw(TypeError);
  });

  it('tests undefined filter option for parameter name creation', function() {
    expect(() => FiltersParametersBuilder.buildParameterName(undefinedOptionFilter)).to.throw(ReferenceError);
  });

  it('tests undefined filter operator for parameter name creation', function() {
    expect(() => FiltersParametersBuilder.buildParameterName(undefinedOperatorFilter)).to.throw(ReferenceError);
  });

  it('tests expected filter parameters creation', function() {
    let parameters = FiltersParametersBuilder.build(filters);
    let expectedParameters = {
      'average_price.lt': value1,
    };
    expect(parameters.toJS()).to.eql(expectedParameters);
  });

  it('tests invalid input filters when creating parameters', function() {
    expect(() => FiltersParametersBuilder.build(invalidFilters)).to.throw(TypeError);
  });

  it('tests undefined filter operator when creating parameters', function() {
    expect(() => FiltersParametersBuilder.build(undefinedOperatorFilters)).to.throw(ReferenceError);
  });

  it('tests undefined filter option when creating parameters', function() {
    expect(() => FiltersParametersBuilder.build(undefinedOptionFilters)).to.throw(ReferenceError);
  });
});
