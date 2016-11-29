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
    field: TaxonomyField.NAME,
  });
  let taxonomyFilters = List.of(taxonomyFilter1, taxonomyFilter2);
  let perPage = 4;
  let page = 5;
  let search = new PerformersSearch({
    ids: ids,
    slugs: slugs,
    taxonomies: taxonomyFilters,
    genres: genreFilters,
    perPage: perPage,
    page: page,
    queryString: query,
  });
  it('tests expected parameter building', function() {
    let parameters = PerformersSearchParametersBuilder.build(search);
    let expectedParameters = {
      id: ids.toJS(),
      slug: slugs.toJS(),
      'genres[primary].slug': [Genre.COUNTRY.slug],
      'genres.slug': [Genre.POP.slug],
      'taxonomies.id': [Taxonomy.SPORTS.id],
      'taxonomies.name':[Taxonomy.CONCERTS.slug],
      page: page,
      per_page: perPage,
      q: query,
    };
    expect(parameters.toJS()).to.eql(expectedParameters);
  });
});
