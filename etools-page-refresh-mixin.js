import EtoolsLogsMixin from './etools-logs-mixin.js';
import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';
import Dexie from 'dexie';
/**
 * Cached page data refresh helper functionality
 * @polymer
 * @mixinFunction
 * @applies EtoolsLogsMixin
 */
const EtoolsPageRefreshMixin = dedupingMixin(
    superClass => class extends EtoolsLogsMixin(superClass) {

      static get properties() {
        return {
          dexieDbsNumber: Number,
          dbsAttemptedToDelete: Array,
          refreshInProgress: Boolean
        };
      }

      static get observers() {
        return ['_triggerPageRefresh(dbsAttemptedToDelete.length)'];
      }

      ready() {
        super.ready();
        this.dexieDbsNumber = 0;
        this.dbsAttemptedToDelete = [];
      }

      refresh() {
    if (!Dexie) { // eslint-disable-line
          this.logError('Dexie not imported', 'etools-page-refresh-mixin');
        }

        this.refreshInProgress = true;
        // **Important : Do not clear localStorage before Dexie db ,
        // because for Firefox, IE, Edge and Safari, Dexie stores the db names
        // in the localStorage under the key Dexie.DatabaseNames
        // and method Dexie.getDabasesNames searches for this key
        // clear DexieDBs for current host then clear local storage and refresh the page
        this.clearDexieDbs();
      }

      clearLocalStorage() {
        localStorage.clear();
      }

      clearDexieDbs() {
        // except Chrome and Opera this method will delete only the dbs created with Dexie
        // eslint-disable-next-line no-undef
        Dexie.getDatabaseNames((dbsNames) => {
          this.dexieDbsNumber = dbsNames.length;
          if (this.dexieDbsNumber > 0) {
            dbsNames.forEach((dbName) => {
              this.deleteDexieDb(dbName);
            });
          }
        });
      }

      deleteDexieDb(dbName) {
        // eslint-disable-next-line no-undef
        const db = new Dexie(dbName);
        let finished = false;
        db.delete().catch(function(err) {
          this.logError('Could not delete indexedDB: ' + dbName, 'etools-page-refresh-mixin', err, true);
        }.bind(this)).finally(function() {
          this.push('dbsAttemptedToDelete', dbName);
          finished = true;
        }.bind(this));
        // TODO: find a better solution for this timeout
        // *In Edge - catch and finally of db.delete() are not executed,
        //            when the site is opened in more than one tab
        setTimeout(() => {
          if (!finished) {
            alert('Please close any other tabs, that have this page open, for the Refresh to work properly.');
          }
        }, 9000);
      }

      _refreshPage() {
        this.refreshInProgress = false;
        window.location.reload(true);
      }

      _triggerPageRefresh(deleteAttempts) {
        if (this.refreshInProgress) {
          let doRefresh = false;
          if (this.dexieDbsNumber > 0) {
            if (deleteAttempts === this.dexieDbsNumber) {
              this.clearLocalStorage();
              doRefresh = true;
            }
          } else {
            this.clearLocalStorage();
            doRefresh = true;
          }
          if (doRefresh) {
            this._refreshPage();
          }
        }
      }

    });

export default EtoolsPageRefreshMixin;
