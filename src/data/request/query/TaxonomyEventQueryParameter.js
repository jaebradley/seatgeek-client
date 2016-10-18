'use es6';

import Taxonomy from '../../Taxonomy';
import TaxonomyField from '../../TaxonomyField';

export default class TaxonomyEventQueryParameter {
  constructor(taxonomy, field=TaxonomyField.ID) {
    if (!(taxonomy instanceof Taxonomy)) {
      throw new Error('must be a taxonomy');
    }

    if (!(field instanceof TaxonomyField)) {
      throw new Error('must be a taxonomy field');
    }

    this.taxonomy = taxonomy;
    this.field = field;
  }

  buildParameterName() {
    return `taxonomies.${this.field.value}`;
  }
}
