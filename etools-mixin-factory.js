/* Offers easier syntax for applying multiple mixins
* @demo demo/demo-mixin-factory.html
*/
class PolymerMixinFactory {
  combineMixins(mixinsArray, superClass) {
    if (mixinsArray instanceof Array === false) {
      throw new Error('[PolymerMixinFactory] mixinsArray is not Array!');
    }
    // make sure the mixins are applied in the same order as defined in list
    mixinsArray.reverse();
    let compositeMixin = null;
    mixinsArray.forEach((m) => {
      if (!m) {
        throw new Error('[PolymerMixinFactory] mixinsArray contains invalid mixins (null|undefined)!');
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
window.EtoolsMixinFactory = window.EtoolsMixinFactory || new PolymerMixinFactory();
