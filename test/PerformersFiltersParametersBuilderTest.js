'use es6';

import {expect} from 'chai';
import {List} from 'immutable';

import PerformerField from '../src/data/PerformerField';
import PerformerSpecificity from '../src/data/PerformerSpecificity';
import PerformerFilter from '../src/data/request/query/PerformerFilter';
import PerformersFilters from '../src/data/request/query/PerformersFilters';
import PerformersFiltersParametersBuilder from '../src/data/request/query/builders/PerformersFiltersParametersBuilder';

describe('Tests Performers Filter Parameters Builder', function() {
  let field = PerformerField.ID;
  let specificity = PerformerSpecificity.ANY;
  let value = 1;
  let filter = new PerformerFilter({
    field: field,
    specificity: specificity,
    value: value,
  });
  let anotherValue = 4;
  let anotherFilter = new PerformerFilter({
    field: field,
    specificity: specificity,
    value: anotherValue,
  });
  let ids = List.of(2, 3);
  let filters = List.of(filter, anotherFilter);
  let performersFilters = new PerformersFilters({
    ids: ids,
    filters: filters,
  });

  it('tests static parameter name', function() {
    expect(PerformersFiltersParametersBuilder.getIdsParameterName()).to.equal('id');
  });

  it('tests expected behavior building parameter name', function() {
    let name = PerformersFiltersParametersBuilder.buildParameterName(filter);
    expect(name).to.equal('performers[any].id');
  });

  it('tests invalid input building parameter name', function() {
    expect(() => PerformersFiltersParametersBuilder.buildParameterName(1)).to.throw(TypeError);
  });

  it('tests expected behavior building parameters', function() {
    let expectedParameters = {
      'id': [2, 3],
      'performers[any].id': [value, anotherValue],
    };
    let parameters = PerformersFiltersParametersBuilder.build(performersFilters);
    expect(parameters.toJS()).to.eql(expectedParameters);
  });

  it('tests invalid inputs', function() {
    let invalidFilters = new PerformersFilters({
      ids: ids,
      filters: List.of(1, 2),
    });
    expect(() => PerformersFiltersParametersBuilder.build(1)).to.throw(TypeError);
    expect(() => PerformersFiltersParametersBuilder.build(invalidFilters)).to.throw(TypeError);
  });
});
