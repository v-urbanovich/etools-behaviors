/**
 * Offers easier syntax for applying multiple mixins
 *
 * ```class EtoolsBehaviorsDemoHelper extends EtoolsMixinFactory.combineMixins([EtoolsLogsMixin], PolymerElement)```
 *
 * @polymer
 * @demo demo/index.html
 */
export class EtoolsMixinFactory {
  static combineMixins(mixinsArray, superClass) {
    if (mixinsArray instanceof Array === false) {
      throw new Error('[EtoolsMixinFactory] mixinsArray is not Array!');
    }
    // make sure the mixins are applied in the same order as defined in list
    mixinsArray.reverse();
    let compositeMixin = null;
    mixinsArray.forEach((m) => {
      if (!m) {
        throw new Error('[EtoolsMixinFactory] mixinsArray contains invalid mixins (null|undefined)!');
      }
      if (!compositeMixin) {
        // start by using PolymerElement as mixins superClass
        compositeMixin = m(superClass);
      } else {
        compositeMixin = m(compositeMixin);
      }
    });
    return compositeMixin;
  }
}
