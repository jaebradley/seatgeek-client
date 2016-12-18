'use es6';

import {expect} from 'chai';

import Pagination from '../src/query/Pagination';
import PaginationParametersBuilder from '../src/query/PaginationParametersBuilder';

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
});
