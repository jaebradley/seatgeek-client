'use es6';

import {expect} from 'chai';

import SortDirection from '../src/data/request/query/SortDirection';
import SortOption from '../src/data/request/query/SortOption';
import SortFilter from '../src/data/request/query/SortFilter';
import SortFilterParametersBuilder from '../src/data/request/query/builders/SortFilterParametersBuilder';

describe('Tests Sort Filter Parameters Builder', function() {
  let option = SortOption.SCORE;
  let direction = SortDirection.ASCENDING;
  it('tests static sort parameter name', function() {
    expect(SortFilterParametersBuilder.getSortParameterName()).to.equal('sort');
  });

  it('tests invalid input', function() {
    expect(() => SortFilterParametersBuilder.build(1)).to.throw(TypeError);
  });

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
)};
