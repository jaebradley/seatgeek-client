'use es6';

import {expect} from 'chai';

import {List} from 'immutable';

import Genre from '../src/data/Genre';
import GenreFilter from '../src/data/request/query/GenreFilter';
import GenreFiltersParametersBuilder from '../src/data/request/query/builders/GenreFiltersParametersBuilder';

describe('Test Genre Filters Parameters Builder', function() {
  let countryFilter = new GenreFilter({genre: Genre.COUNTRY, isPrimary: true});
  let popFilter = new GenreFilter({genre: Genre.POP, isPrimary: false});
  let rockFilter = new GenreFilter({genre: Genre.ROCK, isPrimary: true});
  let alternativeFilter = new GenreFilter({genre: Genre.ALTERNATIVE, isPrimary: false});

  it('tests primary genres key value', function() {
    expect(GenreFiltersParametersBuilder.getPrimaryGenreParameterName()).to.equal('genres[primary].slug');
  });

  it('tests genres key value', function() {
    expect(GenreFiltersParametersBuilder.getGenreParameterName()).to.equal('genres.slug');
  });

  it('tests getting parameter value', function() {
      expect(GenreFiltersParametersBuilder.getParameterValue(countryFilter)).to.equal(countryFilter.genre.slug);
  });

  it('tests building parameter name', function() {
    expect(GenreFiltersParametersBuilder.getParameterName(countryFilter))
          .to.equal(GenreFiltersParametersBuilder.getPrimaryGenreParameterName());

          expect(GenreFiltersParametersBuilder.getParameterName(popFilter))
                .to.equal(GenreFiltersParametersBuilder.getGenreParameterName());
  });

  it('tests building parameters', function() {
    let filters = List.of(countryFilter, popFilter, rockFilter, alternativeFilter);
    let parameters = GenreFiltersParametersBuilder.build(filters);
    expect(parameters.get(GenreFiltersParametersBuilder.getPrimaryGenreParameterName()).toJS()).to.eql([Genre.COUNTRY.slug, Genre.ROCK.slug]);
    expect(parameters.get(GenreFiltersParametersBuilder.getGenreParameterName()).toJS()).to.eql([Genre.POP.slug, Genre.ALTERNATIVE.slug]);
  });
});
