System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec2, _dec, _class, _crd, ccclass, property, fort;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a32dbbUd5NNw6aU+43IzjER", "fort", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab', 'Sprite', 'systemEvent', 'SpriteFrame', 'Input', 'input', 'EventMouse', 'SystemEvent', 'Node', 'EventKeyboard', 'macro', 'RigidBody2D', 'Vec2', 'Vec3', 'instantiate', 'Collider2D', 'Contact2DType']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("fort", fort = (_dec = ccclass('fort'), _dec(_class = class fort extends Component {
        constructor() {
          super(...arguments);
          this.mouseposition = new Vec2(0, 0);
        }

        start() {}

        update(deltaTime) {
          this.makemouseposition(event);
        }

        makemouseposition(event) {
          this.mouseposition = event.getLocation();
          console.log(m);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5cc82e7ad78f9ebf88236365f0529486837c7b82.js.map