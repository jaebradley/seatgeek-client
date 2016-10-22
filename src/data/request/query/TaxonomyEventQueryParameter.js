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

  getValue() {
    return this.taxonomy[this.field.value];
  }

  static buildTaxonomyEventQueryParameters(taxonomies) {
    if (!(taxonomies instanceof Array)) {
      throw new Error('taxonomies must be an array');
    }

    let taxonomyQueryParameters = {};
    for (var i = 0; i < taxonomies.length; i++) {
      let taxonomy = taxonomies[i];

      if (!(taxonomy instanceof TaxonomyEventQueryParameter)) {
        throw new Error('all elements must be a TaxonomyEventQueryParameter');
      }

      let queryParameterName = taxonomy.buildParameterName();
      let queryParameterValues = [];

      if (queryParameterName in taxonomyQueryParameters) {
        queryParameterValues = taxonomyQueryParameters[queryParameterName];
      }

      queryParameterValues.push(taxonomy.getValue());
      taxonomyQueryParameters[queryParameterName] = queryParameterValues;
    }

    return taxonomyQueryParameters;
  }
}
