'use es6';

import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import {List} from 'immutable';

import Genre from '../src/data/Genre';
import Genre from '../src/data/Taxonomy';
import Taxonomy from '../src/data/Taxonomy';
import TaxonomyFilter from '../src/data/request/query/TaxonomyFilter';
import TaxonomyField from '../src/data/request/query/TaxonomyField';

import PerformersSearchBuilder from '../src/data/request/query/builders/PerformersSearchBuilder';

describe('Test Performers Search Builder', function() {
  it('tests id building', function() {
    let ids = [1, 2, 3];
    let slugs = ['a', 'b', 'c'];
    let genres = [Genre.COUNTRY, Genre.POP];
    let taxonomies = [
      {

      }
    ];
    let queryString = 'jaebaebae';
    let perPage = 4;
    let page = 5;

    let json = {
      'ids': ids,
      'slugs': cityName,
      'genres': stateCode,
      'taxonomies': countryCode,
      'queryString': queryString,
      'perPage': useIpAddress,
      'page': latitude,
    };
    let expected =
    chai.expect(createdIds).to.equal(expected);
  });

  it('tests id building error cases', function() {
    chai.expect(() => PerformersSearchBuilder.buildIds(1)).to.throw(TypeError);
    chai.expect(() => PerformersSearchBuilder.buildIds([1, '2'])).to.throw(TypeError);
  });
});
