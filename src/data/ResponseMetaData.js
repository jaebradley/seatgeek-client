'use es6';

import {Record} from 'immutable';

const options = {
  "per_page": 0,
  "total": 0,
  "page": 1,
  "geolocation": null
};

export default class ResponseMetaData extends Record(options) {};
