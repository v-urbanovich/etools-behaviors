
import { PolymerElement } from '@polymer/polymer';

interface Constructor<T> {
  new(...args: any[]): T;
}

/**
 * Cached page data refresh helper functionality
 */
declare function EtoolsPageRefreshMixin<T extends Constructor<PolymerElement>>(base: T): {
  new (...args: any[]): {
    dexieDbsNumber: number|null|undefined;
    dbsAttemptedToDelete: any[]|null|undefined;
    refreshInProgress: boolean|null|undefined;
    ready(): void;
    refresh(): void;
    clearLocalStorage(): void;
    clearDexieDbs(): void;
    deleteDexieDb(dbName: any): void;
    _refreshPage(): void;
  }
} & T & Constructor<PolymerElement>;


export default EtoolsPageRefreshMixin;
