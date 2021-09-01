import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

/**
 * Can be used to log errors, warnings and other info like this.
 *
 * Each method can have 3 args:
 * - the message you want to log
 * - a prefix for log message
 * - additional data, anything
 *
 * ## Available logging levels (the levels are cumulative)
 * - OFF (default)
 * - ERROR - only errors will be displayed
 * - WARN - errors and warning will be displayed
 * - INFO - errors, warning and info logs displayed
 *
 * To configure the logging level in your app config do this:
 * window.EtoolsLogsLevel = window.EtoolsLogsLevel || 'INFO';
 *
 * @polymer
 * @mixinFunction
 * @demo demo/index.html
 */
const EtoolsLogsMixin = dedupingMixin(baseClass => class extends baseClass {

  static get properties() {
    return {
      /**
       * Available log levels:
       *    OFF
       *    ERROR
       *    WARN
       *    INFO
       */
      etoolsLogsLevel: {
        type: String,
        value: ''
      }
    };
  }

  _getLogLevel() {
    const availableLogLevels = ['OFF', 'ERROR', 'WARN', 'INFO'];
    if (window.EtoolsLogsLevel && availableLogLevels.indexOf(window.EtoolsLogsLevel) === -1) {
      // wrong log level set
      return 'OFF';
    }
    return window.EtoolsLogsLevel || 'OFF';
  }

  _initAndGetLogLevel(forceLevelInit) {
    if (!this.etoolsLogsLevel || forceLevelInit) {
      this.etoolsLogsLevel = this._getLogLevel();
    }
    return this.etoolsLogsLevel;
  }

  _getEtoolsLogMessages(logPrefix, message, messagePrefix) {
    const currentElementName = this.is ? ('[' + this.is + ']') : '';

    let msg = '[' + logPrefix + ']' + currentElementName;
    if (messagePrefix) {
      msg += '[' + messagePrefix.toString() + '] ';
    }
    msg += message;
    return msg;
  }

  _canLog(levels, forceLevelInit) {
    return levels.indexOf(this._initAndGetLogLevel(forceLevelInit)) > -1;
  }

  logError(message, messagePrefix, other, forceLevelInit) {
    if (this._canLog(['ERROR', 'WARN', 'INFO'], forceLevelInit)) {
      // eslint-disable-next-line
      console.error(this._getEtoolsLogMessages('ERROR', message, messagePrefix), other ? other : '');
    }
  }

  logWarn(message, messagePrefix, other, forceLevelInit) {
    if (this._canLog(['WARN', 'INFO'], forceLevelInit)) {
      // eslint-disable-next-line
      console.warn(this._getEtoolsLogMessages('WARN', message, messagePrefix), other ? other : '');
    }
  }

  logInfo(message, messagePrefix, other, forceLevelInit) {
    if (this._canLog(['INFO'], forceLevelInit)) {
      // eslint-disable-next-line
      console.log(this._getEtoolsLogMessages('INFO', message, messagePrefix), other ? other : '');
    }
  }
});

export default EtoolsLogsMixin;
