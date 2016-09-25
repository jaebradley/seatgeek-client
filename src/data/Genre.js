'use es6';

import {Enum} from 'enumify';

export default class Genre extends Enum {}
Genre.initEnum({
  COUNTRY: {
    slug: "country",
    id: 450,
  },
  ROCK: {
    slug: "rock",
    id: 456,
  },
  INDIE: {
    slug: "indie",
    id: 458,
  },
  PUNK: {
    slug: "punk",
    id: 461,
  },
  BLUES: {
    slug: "blues",
    id: 465,
  },
  SOUL: {
    slug: "soul",
    id: 466,
  },
  FOLK: {
    slug: "folk",
    id: 467,
  },
  JAZZ: {
    slug: "jazz",
    id: 468,
  },
  CLASSIC_ROCK: {
    slug: "classic-rock",
    id: 472,
  },
  HARD_ROCK: {
    slug: "hard-rock",
    id: 473,
  },
  ELECTRONIC: {
    slug: "electronic",
    id: 477,
  },
  RNB: {
    slug: "rnb",
    id: 487,
  },
  HIP_HOP: {
    slug: "hip-hop",
    id: 491,
  },
  RAP: {
    slug: "rap",
    id: 493,
  },
  FUNK: {
    slug: "funk",
    id: 502,
  },
  LATIN: {
    slug: "latin",
    id: 504,
  },
  CLASSICAL: {
    slug: "classical",
    id: 747,
  },
});
