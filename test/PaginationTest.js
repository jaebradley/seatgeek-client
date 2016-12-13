'use es6';

import {expect} from 'chai';

import Pagination from '../src/query/Pagination';
import Constants from '../src/data/Constants';

describe('Pagination Test', function() {
  it('tests pagination default values', function() {
    let pagination = new Pagination();
    expect(pagination.perPage).to.equal(Constants.getDefaultPerPage());
    expect(pagination.page).to.equal(Constants.getDefaultPage());
  });

  it('tests expected pagination', function() {
    let perPage = 100;
    let page = 200;
    let expectedPageParameters = {
      per_page: 100,
      page: 200,
    };
    let pagination = new Pagination({perPage: perPage, page: page});

    expect(pagination.perPage).to.equal(perPage);
    expect(pagination.page).to.equal(page);
  });
});
