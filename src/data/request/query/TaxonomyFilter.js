'use es6';

import {Record} from 'immutable';

import TaxonomyField from '../../TaxonomyField';

let defaults = {
  taxonomy: undefined,
  field: TaxonomyField.ID,
};

export default class TaxonomyFilter extends Record(defaults) {
};
