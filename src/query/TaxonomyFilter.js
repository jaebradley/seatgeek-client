'use es6';

import {Record} from 'immutable';

import TaxonomyField from './TaxonomyField';
import Taxonomy from '../../Taxonomy';

let defaults = {
  taxonomy: Taxonomy.CONCERTS,
  field: TaxonomyField.ID,
};

export default class TaxonomyFilter extends Record(defaults) {
};
