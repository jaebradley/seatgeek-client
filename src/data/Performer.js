'use es6';

export default class Performer {
  let performerEventQueryParameterPrefix = 'performers';

  constructor(value, field, specificity) {
    this.value = value;
    this.field = field;
    this.category = specificity;
  }

  buildPerformerEventQueryParameterName() {
    return `${performersPrefix}[${this.category.value}].${this.field.value}`;
  }
}
