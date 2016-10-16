'use es6';

export default class TaxonomyEventQueryParameter {
  let prefix = 'taxonomies';

  constructor(value, field) {
    this.value = value;
    this.field = field;
  }

  buildParameterName() {
    return `${prefix}.${this.field.value}`;
  }
}
