'use es6';

import {expect} from 'chai';

import Pagination from '../src/data/request/query/Pagination';
import PaginationParametersBuilder from '../src/data/request/query/builders/PaginationParametersBuilder';

describe('Test pagination parameters builder', function() {
  it('tests pagination parameters builder', function() {
    let perPage = 1;
    let page = 2;
    let pagination = new Pagination({
      perPage: perPage,
      page: page,
    });
    let expectedParameters = {
      per_page: perPage,
      page: page,
    };
    expect(PaginationParametersBuilder.build(pagination))
          .to.eql(expectedParameters);
  });
});