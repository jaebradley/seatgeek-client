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
  NCAA_BASEBALL: {
    slug: 'ncaa_baseball',
    id: 1010200,
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
  WNBA_BASKETBALL: {
    slug: 'wnba',
    id: 1030400,
    parent_id: 1030000,
  },
  NBA_DLEAGUE: {
    slug: 'nba_dleague',
    id: 1030500,
    parent_id: 1030000,
  },
  HOCKEY: {
    slug: 'hockey',
    id: 1040000,
    parent_id: 1000000,
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
  MLS_SOCCER: {
    slug: 'mls',
    id: 1050100,
    parent_id: 1050000,
  },
  COLLEGE_SOCCER: {
    slug: 'ncaa_soccer',
    id: 1050200,
    parent_id: 1050000,
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
  NASCAR: {
    slug: 'nascar',
    id: 1060100,
    parent_id: 1060000,
  },
  NASCAR_SPRINT_CUP_SERIES: {
    slug: 'nascar_sprintcup',
    id: 1060101,
    parent_id: 1060100,
  },
  NASCAR_NATIONWIDE_SERIES: {
    slug: 'nascar_nationwide',
    id: 1060102,
    parent_id: 1060100,
  },
  INDYCAR: {
    slug: 'indycar',
    id: 1060200,
    parent_id: 1060000,
  },
  F1_RACING: {
    slug: 'f1',
    id: 1060300,
    parent_id: 1060000,
  },
  MONSTER_TRUCK: {
    slug: 'monster_truck',
    id: 1060400,
    parent_id: 1060000,
  },
  MOTOCROSS: {
    slug: 'motocross',
    id: 1060500,
    parent_id: 1060000,
  },
  GOLF: {
    slug: 'golf',
    id: 1070000,
    parent_id: 1000000,
  },
  PGA_GOLF: {
    slug: 'pga',
    id: 1070100,
    parent_id: 1070000,
  },
  LPGA_GOLF: {
    slug: 'lpga',
    id: 1070200,
    parent_id: 1070000,
  },
  FIGHTING: {
    slug: 'fighting',
    id: 1080000,
    parent_id: 1000000,
  },
  BOXING: {
    slug: 'boxing',
    id: 1080100,
    parent_id: 1080000,
  },
  MMA: {
    slug: 'mma',
    id: 1080200,
    parent_id: 1080000,
  },
  WRESTLING: {
    slug: 'wrestling',
    id: 1080300,
    parent_id: 1080000,
  },
  WWE: {
    slug: 'wwe',
    id: 1080301,
    parent_id: 1080300,
  },
  TENNIS: {
    slug: 'tennis',
    id: 1090000,
    parent_id: 1000000,
  },
  ANIMAL_SPORTS: {
    slug: 'animal_sports',
    id: 1100000,
    parent_id: 1000000,
  },
  HORSE_RACING: {
    slug: 'horse_racing',
    id: 1100100,
    parent_id: 1100000,
  },
  RODEO: {
    slug: 'rodeo',
    id: 1100200,
    parent_id: 1100000,
  },
  EXTREME_SPORTS: {
    slug: 'extreme_sports',
    id: 1110000,
    parent_id: 1000000,
  },
  OLYMPIC_SPORTS: {
    slug: 'olympic_sports',
    id: 1120000,
    parent_id: 1000000,
  },
  CONCERT: {
    slug: '',
    id: 2000000,
    parent_id: null,
  },
  MUSIC_FESTIVAL: {
    slug: 'music_festival',
    id: 2010000,
    parent_id: 2000000,
  },
  THEATER: {
    slug: 'theater',
    id: 3000000,
    parent_id: null,
  },
  CLASSICAL: {
    slug: 'classical',
    id: 3010000,
    parent_id: 3000000,
  },
  CLASSICAL_OPERA: {
    slug: 'classical_opera',
    id: 3010100,
    parent_id: 3010000,
  },
  CLASSICAL_VOCAL: {
    slug: 'classical_vocal',
    id: 3010200,
    parent_id: 3010000,
  },
  CLASSICAL_ORCHESTRAL: {
    slug: 'classical_orchestral_instrumental',
    id: 3010300,
    parent_id: 3010000,
  },
  CIRQUE_DE_SOLEIL: {
    slug: 'cirque_du_soleil',
    id: 3020000,
    parent_id: 3000000,
  },
  BROADWAY_SHOW: {
    slug: 'broadway_tickets_national',
    id: 3030000,
    parent_id: 3000000,
  },
  COMEDY: {
    slug: 'comedy',
    id: 3040000,
    parent_id: 3000000,
  },
  FAMILY_ENTERTAINMENT: {
    slug: 'family',
    id: 3050000,
    parent_id: 3000000,
  },
  DANCE_SHOW: {
    slug: 'dance_performance_tour',
    id: 3060000,
    parent_id: 3000000,
  },
  FILM: {
    slug: 'film',
    id: 3070000,
    parent_id: 3000000,
  },
  LITERARY: {
    slug: 'literary',
    id: 3080000,
    parent_id: 3000000,
  },
  CIRCUS: {
    slug: 'circus',
    id: 3090000,
    parent_id: 3000000,
  },
});
