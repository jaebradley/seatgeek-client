'use es6';

import Unit from './Unit';

export default class Constants {
  static getDefaultPerPage() {
    return 100;
  }

  static getDefaultPage() {
    return 1;
  }

  static getDefaultRange() {
    return 10;
  }

  static getDefaultUnit() {
    return Unit.MILE;
  }

  static getDefaultUseIpAddress() {
    return true;
  }
}
