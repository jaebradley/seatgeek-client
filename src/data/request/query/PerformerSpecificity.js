'use es6';

import {Enum} from 'enumify';

export default class PerformerSpecificity extends Enum {}
PerformerSpecificity.initEnum({
  ANY: { value: 'any' },
  PRIMARY: { value: 'primary' },
  HOME_TEAM: { value: 'home_team' },
  AWAY_TEAM: { value: 'away_team' },
});
