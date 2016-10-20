'use es6';

import {Enum} from 'enumify';

export default class TaxonomyField extends Enum {}
TaxonomyField.initEnum({
  NAME: { value: 'name' },
  ID: { value: 'id' },
  PARENT_ID: { value: 'parent_id' },
});
