'use es6';

import {Enum} from 'enumify';

export default class PerformerCategory extends Enum {}
PerformerCategory.initEnum({
  ANY: { value: 'any' },
  PRIMARY: { value: 'primary' },
  HOME_TEAM: { value: 'home_team' },
  AWAY_TEAM: { value: 'away_team' },
});
