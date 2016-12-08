'use es6';

import {Enum} from 'enumify';

export default class TaxonomyField extends Enum {}
TaxonomyField.initEnum({
  NAME: { value: 'name', parameterValue: 'name' },
  ID: { value: 'id', parameterValue: 'slug' },
  PARENT_ID: { value: 'parent_id', parameterValue: 'parent__id' },
});
