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
  BASKETBALL: {
    slug: 'basketball',
    id: 1030000,
    parent_id: 1000000,
  },
  NBA_BASKETBALL: {
    slug: 'nba',
    id: 1030100,
    parent_id: 1030000,
  },
  COLLEGE_BASKETBALL: {
    slug: 'ncaa_basketball',
    id: 1030200,
    parent_id: 1030000
  },
  COLLEGE_WOMENS_BASKETBALL: {
    slug: 'ncaa_womens_basketball',
    id: 1030300,
    parent_id: 1030000,
  },
  NBA_DLEAGUE: {
    slug: 'nba_dleague',
    id: 1030500,
    parent_id: 1030000,
  },
  NHL_HOCKEY: {
    slug: 'nhl',
    id: 1040100,
    parent_id: 1040000,
  },
  COLLEGE_HOCKEY: {
    slug: 'ncaa_hockey',
    id: 1040200,
    parent_id: 1040000,
  },
  MINOR_LEAGUE_HOCKEY: {
    slug: 'minor_league_hockey',
    id: 1040300,
    parent_id: 1040000,
  },
  SOCCER: {
    slug: 'soccer',
    id: 1050000,
    parent_id: 1000000,
  },
  EUROPEAN_SOCCER: {
    slug: 'european_soccer',
    id: 1050300,
    parent_id: 1050000,
  },
  INTERNATIONAL_SOCCER: {
    slug: 'international_soccer',
    id: 1050400,
    parent_id: 1050000,
  },
  WORLD_CUP_2014: {
    slug: 'world_cup',
    id: 1050401,
    parent_id: 1050000,
  },
  AUTO_RACING: {
    slug: 'auto_racing',
    id: 1060000,
    parent_id: 1000000,
  },
});
