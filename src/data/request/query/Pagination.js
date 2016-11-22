'use es6';

import {Record} from 'immutable';

import SeatGeekClient from '../../../SeatGeekClient';

let defaults = {
  perPage: SeatGeekClient.getDefaultPerPage(),
  page: SeatGeekClient.getDefaultPage(),
};

export default class Pagination extends Record(defaults) {
};
