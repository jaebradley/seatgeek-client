'use es6';

import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import {List} from 'immutable';

import Genre from '../src/data/Genre';
import GenreFilter from '../src/query/performers/GenreFilter';
import Taxonomy from '../src/data/Taxonomy';
import TaxonomyFilter from '../src/query/TaxonomyFilter';
import TaxonomyField from '../src/query/TaxonomyField';

import PerformersSearchBuilder from '../src/data/request/query/builders/PerformersSearchBuilder';

describe('Test Performers Search Builder', function() {
  it('tests slugs building', function() {
    let slugs = ['a', 'b', 'c'];
    let expectedSlugs = List.of('a', 'b', 'c');
    let createdSlugs = PerformersSearchBuilder.buildSlugs(slugs);
    chai.expect(createdSlugs).to.eql(expectedSlugs);
  });

  it('tests slug building error cases', function() {
    chai.expect(() => PerformersSearchBuilder.buildSlugs(1)).to.throw(TypeError);
    chai.expect(() => PerformersSearchBuilder.buildSlugs(['1', 2])).to.throw(TypeError);
  });

  it('tests genres filters building', function() {
    let genreFilterJson = [
      {
        genre: Genre.COUNTRY
      },
      {
        genre: Genre.POP,
        isPrimary: false
      }
    ];
    let expectedGenres = List.of(
      new GenreFilter({
        genre: Genre.COUNTRY,
      }),
      new GenreFilter({
        genre: Genre.POP,
        isPrimary: false,
      })
    );
    let createdGenres = PerformersSearchBuilder.buildGenresFilter(genreFilterJson);
    chai.expect(createdGenres).to.eql(expectedGenres);
  });

  it('tests genres filters error cases', function() {
    let noGenres = [
      {
        jae: 'baebae'
      }
    ];
    chai.expect(() => PerformersSearchBuilder.buildGenresFilter(noGenres)).to.throw(TypeError);

    let notBoolean = [
      {
        genre: Genre.POP,
        isPrimary: 'jaebaebae'
      }
    ];
    chai.expect(() => PerformersSearchBuilder.buildGenresFilter(notBoolean)).to.throw(TypeError);
  });

});
