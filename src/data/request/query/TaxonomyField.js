'use es6';

import {Enum} from 'enumify';

export default class TaxonomyField extends Enum {}
TaxonomyField.initEnum({
  NAME: { value: 'name', parameterName: 'name' },
  ID: { value: 'id', parameterName: 'slug' },
  PARENT_ID: { value: 'parent_id', parameterName: 'parent__id' },
});
