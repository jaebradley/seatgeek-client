'use es6';

import {expect} from 'chai';

import PerformersQuery from '../src/data/request/query/PerformersQuery';

describe('Test PerformersQuery', function() {
  it('tests construction', function() {
    let defaultPerformersQuery = new PerformersQuery({queryString: 'jae'});
    expect(defaultPerformersQuery.queryString).to.equal('jae');
  });
});
