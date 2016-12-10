'use es6';

import {Enum} from 'enumify';

export default class TaxonomyField extends Enum {}
TaxonomyField.initEnum({
  NAME: { value: 'name', parameterName: 'slug' },
  ID: { value: 'id', parameterName: 'id' },
  PARENT_ID: { value: 'parent_id', parameterName: 'parent_id' },
});
