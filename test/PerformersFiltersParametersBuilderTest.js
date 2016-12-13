'use es6';

import {expect} from 'chai';
import {List} from 'immutable';

import PerformerField from '../src/query/events/performer/PerformerField';
import PerformerSpecificity from '../src/query/events/performer/PerformerSpecificity';
import PerformerFilter from '../src/query/events/performer/PerformerFilter';
import PerformersFiltersParametersBuilder from '../src/query/events/performer/PerformersFiltersParametersBuilder';

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

  it('tests expected behavior building parameter name', function() {
    let name = PerformersFiltersParametersBuilder.buildParameterName(filter);
    expect(name).to.equal('performers[any].id');
  });

  it('tests expected behavior building parameters', function() {
    let expectedParameters = {
      'performers[any].id': [value, anotherValue],
    };
    let parameters = PerformersFiltersParametersBuilder.build(filters);
    expect(parameters.toJS()).to.eql(expectedParameters);
  });
});
