'use es6';

import {Record} from 'immutable';

import FilterOption from './FilterOption';
import Operator from './Operator';

let defaults = {
  option: FilterOption.AVERAGE_PRICE,
  operator: Operator.LESS_THAN,
  value: undefined,
};

export default class Filter extends Record(defaults){
};
