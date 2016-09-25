import {Enum} from "enumify";

export default class Subpath extends Enum {}
Subpath.initEnum({
  GENRES: {
    value: 'genres',
  },
  TAXONOMIES: {
    value: 'taxonomies',
  },
  VENUES: {
    value: 'venues',
  },
});
