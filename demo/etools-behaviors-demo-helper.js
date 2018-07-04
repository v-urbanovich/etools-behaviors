import EtoolsLogsMixin from '../etools-logs-mixin.js';
import EtoolsMixinFactory from '../etools-mixin-factory.js';

import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-fab/paper-fab';

class EtoolsBehaviorsDemoHelper extends EtoolsLogsMixin(PolymerElement) {
  static get template() {
    // language=HTML
    return html`
      <div style="width:100%; padding:30px;text-align:center;">
        <h3>Check browser console</h3>
        <paper-fab icon="favorite"></paper-fab>
        <paper-fab mini icon="reply"></paper-fab>
        <paper-fab label="😻"></paper-fab>
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

/*
*@ignore
*/
class DemoMixinFactory extends EtoolsMixinFactory.combineMixins([EtoolsLogsMixin], PolymerElement) {
  static get template() {
    // language=HTML
    return html`
      <div style="width:100%; padding:30px;text-align:center;">
        <h3>Check browser console</h3>
      </div>
    `;
  }

  static get is() {
    return 'demo-mixin-factory';
  }

  ready() {
    super.ready();
    this.logError('some error msg...', null, {someObjProp: 'some data value'});
    this.logWarn('some warning msg...', 'some page section', {someObjProp: 'some data value'});
    this.logInfo('some info msg...', null, {someObjProp: 'some data value'})
  }
}

customElements.define(DemoMixinFactory.is, DemoMixinFactory);

