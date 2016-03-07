if (typeof AFRAME === 'undefined') {
  throw 'Component attempted to register before AFRAME was available.';
}
// To avoid recalculation at every mouse movement tick
var PI_2 = Math.PI / 2;
var MAX_DELTA = 0.2;

/**
 * Orbit Controls component for A-Frame.
 */

AFRAME.registerComponent('orbit-controls', {

schema: {
  },

  init: function () {
    var orbitController =  new THREE.OrbitControls(this.el.object3D.children[0])
  }

});
