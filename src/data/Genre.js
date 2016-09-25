'use es6';

import {Record, Map, fromJS} from 'immutable';

const options = {
  images: new Map(),
  image: "",
  slug: "",
  name: "",
  id: 0,
};

export default class Genre extends Record(options) {
  static fromJson(genreJson) {
    if (!('images' in genreJson)) {
      throw 'images not in json';
    }

    if (!('image' in genreJson)) {
      throw 'image not in json';
    }

    if (!('slug' in genreJson)) {
      throw 'slug not in json';
    }

    if (!('name' in genreJson)) {
      throw 'name not in json';
    }

    if (!('id' in genreJson)) {
      throw 'id not in json';
    }

    return new Genre({
      images: fromJS(genreJson.images),
      image: genreJson.image,
      slug: genreJson.slug,
      name: genreJson.name,
      id: genreJson.id,
    })
  }
};
