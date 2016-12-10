'use es6';

import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import {List} from 'immutable';

import PerformersSearchBuilder from '../src/data/request/query/builders/PerformersSearchBuilder';

describe('Test Performers Search Builder', function() {
  it('tests id building', function() {
    let ids = [
      1,
      2,
      3
    ];
    let expected = List.of(1, 2, 3);
    let createdIds = PerformersSearchBuilder.buildIds(ids);
    chai.expect(createdIds).to.equal(expected);
  });

  it('tests id building error cases', function() {
    chai.expect(() => PerformersSearchBuilder.buildIds(1)).to.throw(TypeError);
    chai.expect(() => PerformersSearchBuilder.buildIds([1, '2'])).to.throw(TypeError);
  });
});
