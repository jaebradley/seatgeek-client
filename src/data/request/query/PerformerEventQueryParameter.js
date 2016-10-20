'use es6';

import PerformerField from '../../PerformerField';
import PerformerSpecificity from '../../PerformerSpecificity';

export default class PerformerEventQueryParameter {
  constructor(value, field, specificity=PerformerSpecificity.ANY) {
    if (!(field instanceof PerformerField)) {
      throw new Error('field must be an instance of PerformerField');
    }

    if (!(specificity instanceof PerformerSpecificity)) {
      throw new Error('specificity must be an instance of PerformerSpecificity');
    }

    this.value = value;
    this.field = field;
    this.specificity = specificity;
  }

  buildParameterName() {
    return `performers[${this.specificity.value}].${this.field.value}`;
  }
}
