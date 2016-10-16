'use es6';

export default class TaxonomyEventQueryParameter {
  constructor(taxonomy, field) {
    this.taxonomy = taxonomy;
    this.field = field;
  }

  buildParameterName() {
    return `taxonomies.${this.taxonomy[this.field.value]}`;
  }
}
