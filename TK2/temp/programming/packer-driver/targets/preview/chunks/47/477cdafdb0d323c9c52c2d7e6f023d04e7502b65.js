System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, enemyfire, _dec, _class, _crd, ccclass, property, sprite;

  function _reportPossibleCrUseOfenemyfire(extras) {
    _reporterNs.report("enemyfire", "./enemyfire", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      enemyfire = _unresolved_2.enemyfire;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4bdb1c/QApP9IxIJnGpGzl4", "tietu", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab', 'Sprite', 'systemEvent', 'SpriteFrame', 'Input', 'input', 'EventMouse', 'SystemEvent', 'Node', 'EventKeyboard', 'macro', 'RigidBody2D', 'Vec2', 'Vec3', 'instantiate', 'Collider2D', 'Contact2DType']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("sprite", sprite = (_dec = ccclass('sprite.node'), _dec(_class = class sprite extends Component {
        onLoad() {
          this.node.angle = 0;
        }

        start() {
          this.changeDirection();
        }

        update(dt) {
          this.changeDirection();
        }

        changeDirection() {
          var x = this.node.parent.getChildByName('firedirection').getComponent(_crd && enemyfire === void 0 ? (_reportPossibleCrUseOfenemyfire({
            error: Error()
          }), enemyfire) : enemyfire).speed.x;
          var y = this.node.parent.getChildByName('firedirection').getComponent(_crd && enemyfire === void 0 ? (_reportPossibleCrUseOfenemyfire({
            error: Error()
          }), enemyfire) : enemyfire).speed.y;
          var angle = Math.atan2(Math.abs(y), Math.abs(x)) * (180 / Math.PI);

          if (y > 0 && x <= 0) {
            this.node.angle = 180 - angle;
          } else if (y >= 0 && x > 0) {
            this.node.angle = angle;
          } else if (y < 0 && x >= 0) {
            this.node.angle = -angle;
          } else if (y <= 0 && x < 0) {
            this.node.angle = 180 + angle;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=477cdafdb0d323c9c52c2d7e6f023d04e7502b65.js.map