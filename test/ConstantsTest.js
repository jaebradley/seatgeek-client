'use es6';

import {expect} from 'chai';

import Unit from '../src/data/Unit';
import Constants from '../src/data/Constants';

describe('Test Constants', function() {
  it('tests default perPage', function() {
    expect(Constants.getDefaultPerPage()).to.equal(100);
  });

  it('tests default page', function() {
    expect(Constants.getDefaultPage()).to.equal(1);
  });

  it('tests default range', function() {
    expect(Constants.getDefaultRange()).to.equal(10);
  });

  it('tests default unit', function() {
    expect(Constants.getDefaultUnit()).to.eql(Unit.MILE);
  });
});
