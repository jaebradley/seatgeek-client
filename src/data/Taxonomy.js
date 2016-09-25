'use es6';

import {Enum} from 'enumify';

export default class Taxonomy extends Enum {};

Taxonomy.initEnum({
  SPORTS: {
    slug: 'sports',
    id: 1000000,
    parent_id: null
  },
  BASEBALL: {
    slug: 'baseball',
    id: 1010000,
    parent_id: 1000000
  },
  MLB_BASEBALL: {
    slug: 'mlb',
    id: 1010100,
    parent_id: 1010000,
  },
  MINOR_LEAGUE_BASEBALL: {
    slug: 'minor_league_baseball',
    id: 1010300,
    parent_id: 1010000,
  },
  FOOTBALL: {
    slug: 'football',
    id: 1020000,
    parent_id: 1000000,
  },
  NFL_FOOTBALL: {
    slug: 'nfl',
    id: 1020100,
    parent_id: 1020000,
  },
  COLLEGE_FOOTBALL: {
    slug: 'ncaa_football',
    id: 1020200,
    parent_id: 1020000
  },
});
