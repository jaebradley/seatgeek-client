'use es6';

import {Enum} from 'enumify';

export default class PerformerField extends Enum {}
PerformerField.initEnum({
  ID: { value: 'id' },
  SLUG: { value: 'slug' },
});
