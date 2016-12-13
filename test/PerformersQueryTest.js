'use es6';

import {expect} from 'chai';

import PerformersSearch from '../src/query/performers/PerformersSearch';

describe('Test Performers Search', function() {
  it('tests construction', function() {
    let defaultPerformersSearch = new PerformersSearch({queryString: 'jae'});
    expect(defaultPerformersSearch.queryString).to.equal('jae');
  });
});
