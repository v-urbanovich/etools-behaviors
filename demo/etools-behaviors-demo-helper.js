import '../etools-logs-mixin.js';
import '../etools-mixin-factory.js';

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class EtoolsBehaviorsDemoHelper extends EtoolsLogsMixin(PolymerElement) {
  static get template() {
    return html`
    <div style="width:100%; padding:30px;text-align:center;">
      <h3>Check browser console</h3>
    </div>
`;
  }

  static get is() { return 'etools-behaviors-demo-helper'; }

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
// class DemoMixinFactory extends EtoolsMixinFactory.combineMixins([EtoolsLogsMixin], PolymerElement) {
//   static get template() {
//     return html`
//       <div style="width:100%; padding:30px;text-align:center;">
//         <h3>Check browser console</h3>
//       </div>
// `;
//   }
//
//   static get is() { return 'demo-mixin-factory'; }
//
//   ready() {
//     super.ready();
//     this.logError('some error msg...', null, {someObjProp: 'some data value'});
//     this.logWarn('some warning msg...', 'some page section', {someObjProp: 'some data value'});
//     this.logInfo('some info msg...', null, {someObjProp: 'some data value'})
//   }
// }
//   customElements.define(DemoMixinFactory.is, DemoMixinFactory);
