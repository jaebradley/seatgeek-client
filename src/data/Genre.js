'use es6';

import {Record, Map} from 'immutable';

const options = {
  images: new Map({}),
  image: "",
  slug: "",
  name: "",
  id: 0,
};

export default class Genre extends Record(options) {};