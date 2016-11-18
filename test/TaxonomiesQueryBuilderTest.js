'use es6';

import {expect} from 'chai';

import Taxonomy from '../src/data/Taxonomy';
import TaxonomyQueryParameter from '../src/data/request/query/TaxonomyQueryParameter';
import TaxonomyField from '../src/data/TaxonomyField';
import TaxonomiesQueryBuilder from '../src/data/request/query/builders/TaxonomiesQueryBuilder';

describe('Test Taxonomy Query Builder', function() {
  it('tests query building', function() {
    let queryParameter = new TaxonomyQueryParameter(Taxonomy.SPORTS, TaxonomyField.ID);
    let expectedQueryParameters = {
      'taxonomies.id': Taxonomy.SPORT['id'],
    };
    TaxonomiesQueryBuilder.buildQueryParameters([queryParameter])
                          .to.eql(expectedQueryParameters);
  });
});
