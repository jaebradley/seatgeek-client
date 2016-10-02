'use es6';

import {expect} from 'chai';

import FilterQuery from '../src/data/request/query/FilterQuery';
import FilterOption from '../src/data/request/query/FilterOption';
import Operator from '../src/data/request/query/Operator';

describe('Test filter query', function() {
  let filterOption1 = FilterOption.LISTING_COUNT;
  let filterOption2 = FilterOption.LOWEST_PRICE;
  let filterOperator = Operator.GREATER_THAN_OR_EQUAL_TO;
  let filterValue1 = 1;
  let filterValue2 = 10;
  let filterQuery1 = new FilterQuery(filterOption1, filterOperator, filterValue1);
  let filterQuery2 = new FilterQuery(filterOption2, filterOperator, filterValue2);
  let filterQueries = [filterQuery1, filterQuery2];

  it('tests constructor', function() {
    expect(filterQuery1.option).to.eql(filterOption1);
    expect(filterQuery1.operator).to.eql(filterOperator);
    expect(filterQuery1.value).to.eql(filterValue1);
  });

  it('tests exceptional constructor', function() {
    expect(() => new FilterQuery(1, filterOperator, filterValue1)).to.throw(Error);
    expect(() => new FilterQuery(filterOption1, 1, filterValue1)).to.throw(Error);
    expect(() => new FilterQuery(filterOption1, filterOperator, 'jaebaebae')).to.throw(Error);
  });

  it('tests build query parameter name', function() {
    expect(filterQuery1.buildQueryParameterName()).to.equal('listing_count.gte');
  });

  it('tests build query parameters', function() {
    let expectedQueryParameters = {
      'listing_count.gte': filterValue1,
    };
    expect(filterQuery1.buildQueryParameters()).to.eql(expectedQueryParameters);
  });

  it('tests build filter queries parameters', function() {
    let expectedFilterQueriesParameters = {
      'listing_count.gte': filterValue1,
      'lowest_price.gte': filterValue2,
    };
    expect(FilterQuery.buildFilterQueriesParameters(filterQueries)).to.eql(expectedFilterQueriesParameters);
    expect(FilterQuery.buildFilterQueriesParameters([])).to.eql({});
  });

  it('tests exceptional build filter queries parameters', function() {
    expect(() => FilterQuery.buildFilterQueriesParameters(1)).to.throw(Error);
  });
});
