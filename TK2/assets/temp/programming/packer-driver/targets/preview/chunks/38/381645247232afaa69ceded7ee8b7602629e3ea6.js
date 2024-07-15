System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, firedirection0, firedirection1, playerfire, _dec, _class, _crd, ccclass, property, objectfirefast;

  function _reportPossibleCrUseOffiredirection(extras) {
    _reporterNs.report("firedirection0", "./firedirection0", _context.meta, extras);
  }

  function _reportPossibleCrUseOffiredirection2(extras) {
    _reporterNs.report("firedirection1", "./firedirection1", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerfire(extras) {
    _reporterNs.report("playerfire", "./playerfire", _context.meta, extras);
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
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      firedirection0 = _unresolved_2.firedirection0;
    }, function (_unresolved_3) {
      firedirection1 = _unresolved_3.firedirection1;
    }, function (_unresolved_4) {
      playerfire = _unresolved_4.playerfire;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "16e0dDTkZxOaIW6RW+clXFW", "obj-firefast", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider2D', 'BoxCollider2D', 'Contact2DType', 'RigidBody2D']); // 确保正确引入 firedirection0 类
      // 确保正确引入 firedirection1 类


      ({
        ccclass,
        property
      } = _decorator);

      _export("objectfirefast", objectfirefast = (_dec = ccclass('objectfirefast'), _dec(_class = class objectfirefast extends Component {
        start() {
          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        onBeginContact(selfCollider, otherCollider) {
          if (otherCollider.node.name === "tank0" || otherCollider.node.name === "tank1" || otherCollider.node.name === "playertank") {
            var playercontroller0 = otherCollider.getComponentInChildren(_crd && firedirection0 === void 0 ? (_reportPossibleCrUseOffiredirection({
              error: Error()
            }), firedirection0) : firedirection0);
            var playercontroller1 = otherCollider.getComponentInChildren(_crd && firedirection1 === void 0 ? (_reportPossibleCrUseOffiredirection2({
              error: Error()
            }), firedirection1) : firedirection1);
            var playerfire0 = otherCollider.getComponentInChildren(_crd && playerfire === void 0 ? (_reportPossibleCrUseOfplayerfire({
              error: Error()
            }), playerfire) : playerfire);

            if (playercontroller0) {
              playercontroller0.fireInterval = 0;
            } else if (playercontroller1) {
              playercontroller1.fireInterval = 0;
            } else if (playerfire0) {
              playerfire0.fireInterval = 0;
            }
          } // 确保只处理一次销毁操作


          this.scheduleOnce(() => {
            if (!selfCollider.isValid) return; // 防止已销毁的对象再次操作

            selfCollider.node.destroy();
          }, 0.01); // 稍微增加延迟，确保事件处理完毕
        }

        onDestroy() {
          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=381645247232afaa69ceded7ee8b7602629e3ea6.js.map