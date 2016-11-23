'use es6';

import {expect} from 'chai';

import Pagination from '../src/data/request/query/Pagination';
import PaginationParametersBuilder from '../src/data/request/query/builders/PaginationParametersBuilder';

describe('Test pagination parameters builder', function() {
  let perPage = 1;
  let page = 2;
  it('tests pagination parameters builder', function() {
    let pagination = new Pagination({
      perPage: perPage,
      page: page,
    });
    let expectedParameters = {
      per_page: perPage,
      page: page,
    };
    expect(PaginationParametersBuilder.build(pagination).toJS())
          .to.eql(expectedParameters);
  });

  it('tests non-Pagination input throws Error', function() {
    expect(() => PaginationParametersBuilder.build(1)).to.throw(TypeError);
  });

  it('tests Pagination with undefined inputs', function() {
    let undefinedPerPage = new Pagination({
      perPage: undefined,
      page: page,
    });
    let undefinedPage = new Pagination({
      perPage: perPage,
      page: undefined,
    });
    let expectedUndefinedPerPageResult = {
      page: page
    };
    let expectedUndefinedPageResult = {
      perPage: perPage,
    };
    expect(PaginationParametersBuilder.build(undefinedPerPage).toJS())
          .to.eql(expectedUndefinedPerPageResult);
    expect(PaginationParametersBuilder.build(undefinedPage).toJS())
          .to.eql(expectedUndefinedPageResult);
  });

  it('tests parameter names', function() {
    expect(PaginationParametersBuilder.getPerPageParameterName()).to.equal('per_page');
    expect(PaginationParametersBuilder.getPageParameterName()).to.equal('page');
  });
});
