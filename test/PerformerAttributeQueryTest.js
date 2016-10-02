'use es6';

import {expect} from 'chai';

import Genre from '../src/data/Genre';
import Taxonomy from '../src/data/Taxonomy';
import PerformerAttributeQuery from '../src/data/request/query/PerformerAttributeQuery';

describe('Test Performer Attribute Query', function() {
  let defaultIds = [1, 2, 3];
  let defaultSlug = 'jaebaebae';
  let defaultPrimaryGenres = [Genre.COUNTRY, Genre.ROCK];
  let defaultOtherGenres = [Genre.POP];
  let defaultTaxonomies = [Taxonomy.NFL_FOOTBALL, Taxonomy.NBA_BASKETBALL];
  let defaultParentTaxonomies = [Taxonomy.SPORTS];
  let defaultQuery = new PerformerAttributeQuery(defaultIds, defaultSlug, defaultPrimaryGenres,
    defaultOtherGenres, defaultTaxonomies, defaultParentTaxonomies);
  let expectedPrimaryGenreSlugs = [Genre.COUNTRY.slug, Genre.ROCK.slug];
  let expectedOtherGenreSlugs = [Genre.POP.slug];
  let expectedTaxonomyIds = [Taxonomy.NFL_FOOTBALL.id, Taxonomy.NBA_BASKETBALL.id];
  let expectedParentTaxonomyIds = [Taxonomy.SPORTS.id];
  let expectedQueryParameters = {
    'id': defaultIds,
    'slug': defaultSlug,
    'taxonomies.id': expectedTaxonomyIds,
    'taxonomies.parent_id': expectedParentTaxonomyIds,
    'genres[primary].slug': expectedPrimaryGenreSlugs,
    'genres.slug': expectedOtherGenreSlugs,
  };

  it('tests construction', function() {
    expect(defaultQuery.ids).to.eql(defaultIds);
    expect(defaultQuery.slug).to.equal(defaultSlug);
    expect(defaultQuery.primaryGenreSlugs).to.eql(expectedPrimaryGenreSlugs);
    expect(defaultQuery.otherGenreSlugs).to.eql(expectedOtherGenreSlugs);
    expect(defaultQuery.taxonomyIds).to.eql(expectedTaxonomyIds);
    expect(defaultQuery.parentTaxonomyIds).to.eql(expectedParentTaxonomyIds);
  });

  it('tests exceptional cases', function() {
    expect(() => new PerformerAttributeQuery(1, defaultSlug, defaultPrimaryGenres, defaultOtherGenres, defaultTaxonomies, defaultParentTaxonomies).to.throw(Error));
    expect(() => new PerformerAttributeQuery(defaultIds, 1, defaultPrimaryGenres, defaultOtherGenres, defaultTaxonomies, defaultParentTaxonomies).to.throw(Error));
    expect(() => new PerformerAttributeQuery(defaultIds, defaultSlug, 1, defaultOtherGenres, defaultTaxonomies, defaultParentTaxonomies).to.throw(Error));
    expect(() => new PerformerAttributeQuery(defaultIds, defaultSlug, defaultPrimaryGenres, 1, defaultTaxonomies, defaultParentTaxonomies).to.throw(Error));
    expect(() => new PerformerAttributeQuery(defaultIds, defaultSlug, defaultPrimaryGenres, defaultOtherGenres, 1, defaultParentTaxonomies).to.throw(Error));
    expect(() => new PerformerAttributeQuery(defaultIds, defaultSlug, defaultPrimaryGenres, defaultOtherGenres, defaultTaxonomies, 1).to.throw(Error));
  });

  it('tests query parameter building', function() {
    expect(defaultQuery.buildQueryParameters()).to.eql(expectedQueryParameters);
  });
});
