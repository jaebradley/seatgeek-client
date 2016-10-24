'use es6';

import {expect} from 'chai';

import GenreQueryParameter from '../src/data/request/query/GenreQueryParameter';
import Genre from '../src/data/Genre';

describe('Test Genre Query Parameter', function() {
  it('tests construction', function() {
    let queryParameter = new GenreQueryParameter(Genre.COUNTRY, true);
    expect(queryParameter.genre).to.eql(Genre.COUNTRY);
    expect(queryParameter.isPrimary).to.be.true;
  });

  it('tests exceptional cases during construction', function() {
    expect(() => new GenreQueryParameter(1, true).to.throw(Error));
    expect(() => new GenreQueryParameter(Genre.COUNTRY, 'jae').to.throw(Error));
  });

  it('tests query parameter name building', function() {
    let primaryQueryParameter = new GenreQueryParameter(Genre.COUNTRY, true);
    expect(primaryQueryParameter.buildParameterName()).to.equal('genres[primary].slug');

    let nonPrimaryQueryParameter = new GenreQueryParameter(Genre.COUNTRY, false);
    expect(nonPrimaryQueryParameter.buildParameterName()).to.equal('genres.slug');
  });

  it('tests parameter value fetch', function() {
    let queryParameter = new GenreQueryParameter(Genre.COUNTRY, true);
    expect(queryParameter.getParameterValue()).to.equal(Genre.COUNTRY.slug);
  });

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
    expect(GenreQueryParameter.buildQueryParameters(queryParameters).to.eql(expectedQueryParameters));
  });

  it('tests exceptional cases building query parameters', function() {
    expect(() => GenreQueryParameter.buildQueryParameters(1).to.throw(Error));
    expect(() => GenreQueryParameter.buildQueryParameters([1, 2, 3]).to.throw(Error));
  });
});
