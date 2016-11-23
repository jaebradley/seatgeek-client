'use es6';

import {expect} from 'chai';

import {List} from 'immutable';

import Genre from '../src/data/Genre';
import Taxonomy from '../src/data/Taxonomy';
import TaxonomyField from '../src/data/TaxonomyField';

import Pagination from '../src/data/request/query/Pagination';
import TaxonomyFilter from '../src/data/request/query/TaxonomyFilter';
import GenreFilter from '../src/data/request/query/GenreFilter';
import PerformersSearch from '../src/data/request/query/PerformersSearch';
import PerformersSearchParametersBuilder from '../src/data/request/query/builders/PerformersSearchParametersBuilder';

describe('Tests Performers Search Parameters Builder', function() {
  let ids = List.of(1, 2, 3);
  let slugs = List.of('jae', 'bae', 'bradley');
  let query = 'jaebaebae';
  let genreFilter1 = new GenreFilter({
    genre: Genre.COUNTRY,
    isPrimary: true,
  });
  let genreFilter2 = new GenreFilter({
    genre: Genre.POP,
    isPrimary: false,
  });
  let genreFilters = List.of(genreFilter1, genreFilter2);
  let taxonomyFilter1 =  new TaxonomyFilter({
    taxonomy: Taxonomy.SPORTS,
    field: TaxonomyField.ID,
  });
  let taxonomyFilter2 = new TaxonomyFilter({
    taxonomy: Taxonomy.CONCERTS,
    field: TaxonomyField.SLUG,
  });
  let taxonomyFilters = List.of(taxonomyFilter1, taxonomyFilter2);
  let perPage = 4;
  let page = 5;
  let pagination = new Pagination({
    perPage: perPage,
    page: page,
  });
  let search = new PerformersSearch({
    ids: ids,
    slugs: slugs,
    taxonomies: taxonomyFilters,
    genres: genreFilters,
    pagination: pagination,
    q: query,
  });
  it('tests expected parameter building', function() {
    let parameters = PerformersSearchParametersBuilder.build(search);
    let expectedParameters = {
      id: ids,
      slug: slugs,
      'genres[primary].slug': [Genre.COUNTRY.slug],
      'genres.slug': [Genre.POP.slug],
      'taxonomies.id': [Taxonomy.SPORTS.id],
      'taxonomies.slug':[Taxonomy.CONCERTS.slug],
      q: query,
    };
    expect(parameters.toJS()).to.eql(expectedParameters);
  });
});
