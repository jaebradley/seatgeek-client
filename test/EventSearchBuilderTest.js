'use es6';

import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import {List} from 'immutable';

import Unit from '../src/data/Unit';
import EventSearch from '../src/data/request/query/EventSearch';
import PerformerField from '../src/data/request/query/PerformerField';
import PerformerFilter from '../src/data/request/query/PerformerFilter';
import PerformerSpecificity from '../src/data/request/query/PerformerSpecificity';
import VenuesFilter from '../src/data/request/query/VenuesFilter';

import EventSearchBuilder from '../src/data/request/query/builders/EventSearchBuilder';

describe('Test Event Search Builder', function() {
  it('tests venues filter building', function() {

  });
});
