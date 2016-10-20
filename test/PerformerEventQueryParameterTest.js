'use es6';

import {expect} from 'chai';

import PerformerEventQueryParameter from '../src/data/request/query/PerformerEventQueryParameter';
import PerformerField from '../src/data/PerformerField';
import PerformerSpecificity from '../src/data/PerformerSpecificity';

describe('Test Performer Event Query Parameter', function() {
  it('tests construction', function() {
    let queryParameter = new PerformerEventQueryParameter('jae', PerformerField.SLUG);
    expect(queryParameter.value).to.equal('jae');
    expect(queryParameter.field).to.eql(PerformerField.SLUG);
    expect(queryParameter.specificity).to.eql(PerformerSpecificity.ANY);
  });

  it('tests exceptional cases during construction', function() {
    expect(() => new PerformerEventQueryParameter(1, 1).to.throw(Error));
    expect(() => new PerformerEventQueryParameter(1, PerformerField.ID, 1).to.throw(Error));
  });

  it('tests query parameter name building', function() {
    let queryParameter = new PerformerEventQueryParameter('jae', PerformerField.SLUG);
    expect(queryParameter.buildParameterName()).to.equal('performers[any].slug');
  });
});
