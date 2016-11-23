'use es6';

import {Record} from 'immutable';

import FilterOption from './FilterOption';
import Operator from './Operator';

let defaults = {
  option: FilterOption.AVERAGE_PRICE,
  operator: Operator.LESS_THAN,
};

export default class Filter extends Record(defaults){
};
