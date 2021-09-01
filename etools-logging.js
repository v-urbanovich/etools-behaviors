
/**
   * Available log levels:
   *    OFF
   *    ERROR
   *    WARN
   *    INFO
   */
let etoolsLogsLevel = '';

function _getLogLevel() {
  const availableLogLevels = ['OFF', 'ERROR', 'WARN', 'INFO'];
  if (window.EtoolsLogsLevel && availableLogLevels.indexOf(window.EtoolsLogsLevel) === -1) {
    // wrong log level set
    return 'OFF';
  }
  return window.EtoolsLogsLevel || 'OFF';
}

function _initAndGetLogLevel(forceLevelInit) {
  if (!etoolsLogsLevel || forceLevelInit) {
    etoolsLogsLevel = _getLogLevel();
  }
  return etoolsLogsLevel;
}

function _getEtoolsLogMessages(logLevel, message, messagePrefix) {
  let msg = '[' + logLevel + ']';

  if (messagePrefix) {
    msg += '[' + messagePrefix.toString() + '] ';
  }

  msg += message;
  return msg;
}

function _canLog(levels, forceLevelInit) {
  return levels.indexOf(_initAndGetLogLevel(forceLevelInit)) > -1;
}

export function logError(message, messagePrefix, other, forceLevelInit) {
  if (_canLog(['ERROR', 'WARN', 'INFO'], forceLevelInit)) {
    // eslint-disable-next-line
    console.error(_getEtoolsLogMessages('ERROR', message, messagePrefix), other ? other : '');
  }
}

export function logWarn(message, messagePrefix, other, forceLevelInit) {
  if (_canLog(['WARN', 'INFO'], forceLevelInit)) {
    // eslint-disable-next-line
    console.warn(_getEtoolsLogMessages('WARN', message, messagePrefix), other ? other : '');
  }
}

export function logInfo(message, messagePrefix, other, forceLevelInit) {
  if (_canLog(['INFO'], forceLevelInit)) {
    // eslint-disable-next-line
    console.log(_getEtoolsLogMessages('INFO', message, messagePrefix), other ? other : '');
  }
}
