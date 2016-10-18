'use es6';

import {expect} from 'chai';

import Taxonomy from '../src/data/Taxonomy';
import TaxonomyEventQueryParameter from '../src/data/request/query/TaxonomyEventQueryParameter';
import TaxonomyField from '../src/data/TaxonomyField';

describe('Test Taxonomy Event Query Parameter', function() {
  it('tests construction', function() {
    let queryParameter = new TaxonomyEventQueryParameter(Taxonomy.SPORTS, TaxonomyField.ID);
    expect(queryParameter.taxonomy).to.eql(Taxonomy.SPORTS);
    expect(queryParameter.field).to.eql(TaxonomyField.ID);
  });

  it('tests exceptional cases during construction', function() {
    expect(() => new TaxonomyEventQueryParameter(1, TaxonomyField.ID).to.throw(Error));
    expect(() => new TaxonomyEventQueryParameter(Taxonomy.SPORTS, 1).to.throw(Error));
  });

  it('tests query parameter name building', function() {
    let queryParameter = new TaxonomyEventQueryParameter(Taxonomy.SPORTS, TaxonomyField.ID);
    expect(queryParameter.buildParameterName()).to.equal('taxonomies.id');
  });
});
