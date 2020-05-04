import EtoolsLogsMixin from '../etools-logs-mixin.js';
import '../etools-mixin-factory.js';

// page refresh mixin is included here only to be seen by polymer analyzer and add it to demo interface
import EtoolsPageRefreshMixin from '../etools-page-refresh-mixin.js';

import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * @polymer
 * @customElement
 * @appliesMixins EtoolsLogsMixin
 */
class EtoolsBehaviorsDemoHelper extends EtoolsMixinFactory.combineMixins([EtoolsLogsMixin], PolymerElement) {
  static get template() {
    // language=HTML
    return html`
      <div style="width:100%; padding:30px;text-align:center;">
        <h3>Check browser console, then inspect etools-behaviors-demo-helper element declaration</h3>
      </div>
    `;
  }

  static get is() {
    return 'etools-behaviors-demo-helper';
  }

  ready() {
    super.ready();
    this.logError('some error msg...', null, {someObjProp: 'some data value'});
    this.logWarn('some warning msg...', 'some page section', {someObjProp: 'some data value'});
    this.logInfo('some info msg...', null, {someObjProp: 'some data value'})
  }
}

customElements.define(EtoolsBehaviorsDemoHelper.is, EtoolsBehaviorsDemoHelper);

