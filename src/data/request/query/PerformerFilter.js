'use es6';

import {Record} from 'immutable';

import PerformerField from './PerformerField';
import PerformerSpecificity from './PerformerSpecificity';

let defaults = {
  value: 1,
  field: PerformerField.ID,
  specificity: PerformerSpecificity.ANY,
};

export default class PerformerFilter extends Record(defaults) {
};
