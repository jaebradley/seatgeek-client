'use es6';

import {expect} from 'chai';

import QueryParameterBuilder from '../src/data/request/query/QueryParameterBuilder';

describe('Test Query Parameter Builder', function() {
  it('tests expected page parameter building', function() {
    let perPage = 100;
    let page = 200;
    let expectedPageParameters = {
      per_page: 100,
      page: 200,
    };

    expect(QueryParameterBuilder.buildPageParameters(perPage, page)).to.eql(expectedPageParameters);
  });

  it('tests exceptional page parameter building', function() {
    expect(() => QueryParameterBuilder.buildPageParameters('jaebradley', 1)).to.throw(Error);
    expect(() => QueryParameterBuilder.buildPageParameters(1, 'jaebradley')).to.throw(Error);
  });
});
