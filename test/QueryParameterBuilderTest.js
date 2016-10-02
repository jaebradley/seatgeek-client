'use es6';

import {expect} from 'chai';

import QueryParameterBuilder from '../src/data/request/query/QueryParameterBuilder';
import Taxonomy from '../src/data/Taxonomy';

describe('Test QueryParameterBuilder', function() {
  it('tests build taxonomy ids', function() {
    let taxonomy1 = Taxonomy.SPORTS;
    let taxonomy2 = Taxonomy.LITERARY;
    let defaultTaxonomies = [taxonomy1, taxonomy2];
    let expectedTaxonomyIds = [taxonomy1.id, taxonomy2.id];
    expect(QueryParameterBuilder.buildTaxonomyIds(defaultTaxonomies)).to.eql(expectedTaxonomyIds);
    expect(QueryParameterBuilder.buildTaxonomyIds([])).to.eql([]);
  });

  it('tests exceptional cases when building taxonomy ids', function() {
    expect(() => QueryParameterBuilder.buildTaxonomyIds([1, 2, 3])).to.throw(Error);
  });
});
