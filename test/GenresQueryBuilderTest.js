'use es6';

import {expect} from 'chai';

import GenreQueryParameter from '../src/data/request/query/GenreQueryParameter';
import Genre from '../src/data/Genre';
import GenresQueryBuilder from '../src/data/request/query/builders/GenresQueryBuilder';

describe('Test Genre Query Builder', function() {
  it('tests building query parameters', function() {
    let countryQueryParameter = new GenreQueryParameter(Genre.COUNTRY, true);
    let popQueryParameter = new GenreQueryParameter(Genre.POP, false);
    let rockQueryParameter = new GenreQueryParameter(Genre.ROCK, true);
    let alternativeQueryParameter = new GenreQueryParameter(Genre.ALTERNATIVE, false);
    let queryParameters = [countryQueryParameter, popQueryParameter, rockQueryParameter, alternativeQueryParameter];
    let expectedQueryParameters = {
      'genres[primary].slug': [Genre.COUNTRY.slug, Genre.ROCK.slug],
      'genres.slug': [Genre.POP.slug, Genre.ALTERNATIVE.slug],
    };
    expect(GenresQueryBuilder.build(queryParameters)).to.eql(expectedQueryParameters);
  });

  it('tests exceptional cases building query parameters', function() {
    expect(() => GenresQueryBuilder.build(1).to.throw(Error));
    expect(() => GenresQueryBuilder.build([1, 2, 3]).to.throw(Error));
  });
});
