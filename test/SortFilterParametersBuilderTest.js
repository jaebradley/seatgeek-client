'use es6';

import {expect} from 'chai';

import SortDirection from '../src/query/events/sort/SortDirection';
import SortOption from '../src/query/events/sort/SortOption';
import SortFilter from '../src/query/events/sort/SortFilter';
import SortFilterParametersBuilder from '../src/query/events/sort/SortFilterParametersBuilder';

describe('Tests Sort Filter Parameters Builder', function() {
  let option = SortOption.SCORE;
  let direction = SortDirection.ASCENDING;

  it('tests expected behavior', function() {
    let filter = new SortFilter({
      option: option,
      direction: direction,
    });
    let expectedParameters = {
      'sort': option.value + '.' + direction.value,
    };
    let parameters = SortFilterParametersBuilder.build(filter);
    expect(parameters.toJS()).to.eql(expectedParameters);
  });

  it('tests undefined option', function() {
    let filter = new SortFilter({
      option: undefined,
      direction: direction,
    });
    let expectedParameters = {};
    let parameters = SortFilterParametersBuilder.build(filter);
    expect(parameters.toJS()).to.eql(expectedParameters);
  });

  it('tests undefined direction', function() {
    let filter = new SortFilter({
      option: option,
      direction: undefined,
    });
    let expectedParameters = {};
    let parameters = SortFilterParametersBuilder.build(filter);
    expect(parameters.toJS()).to.eql(expectedParameters);
  });
});
