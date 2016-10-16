'use es6';

export default class PerformerEventQueryParameter {
  let prefix = 'performers';

  constructor(value, field, specificity) {
    this.value = value;
    this.field = field;
    this.category = specificity;
  }

  buildParameterName() {
    return `${prefix}[${this.category.value}].${this.field.value}`;
  }
}
