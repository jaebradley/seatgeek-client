'use es6';

import {Map} from 'immutable';

import Pagination from '../Pagination';
import Utilities from './Utilities';

export default class PaginationBuilder {
  static build(json) {
    let args = Map();

    if ('page' in json) {
      args = args.set('page', Utilities.isInteger(json['page']));
    }

    if ('perPage' in json)  {
      args = args.set('perPage', Utilities.isInteger(json['perPage']));
    }

    return new Pagination(args.toJS());
  }
}
