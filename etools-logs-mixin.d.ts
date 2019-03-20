import { PolymerElement } from '@polymer/polymer';
export default EtoolsLogsMixin;

interface Constructor<T = {}> {
  new (...args: any[]) : T;
 }

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
 */
declare function EtoolsLogsMixin(base: Constructor<PolymerElement>):
{
  new (...args: any[]): {
    etoolsLogsLevel: string|null|undefined;
    logError(message: any, messagePrefix?: any, other?: any, forceLevelInit?: any): void;
    logWarn(message: any, messagePrefix?: any, other?: any, forceLevelInit?: any): void;
    logInfo(message: any, messagePrefix?: any, other?: any, forceLevelInit?: any): void;
  };
} & Constructor<PolymerElement> ;

