System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, PlayerController0, PlayerController1, _dec, _class, _crd, ccclass, property, objectmovefast;

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController0", "./tank0", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerController2(extras) {
    _reporterNs.report("PlayerController1", "./tank1", _context.meta, extras);
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
      PlayerController0 = _unresolved_2.PlayerController0;
    }, function (_unresolved_3) {
      PlayerController1 = _unresolved_3.PlayerController1;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d9747Wtz8FM1JYQrbWY8Q4k", "obj-movefast", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider2D', 'BoxCollider2D', 'Contact2DType', 'RigidBody2D']); // 确保正确引入 PlayerController0 类


      // 确保正确引入 PlayerController1 类
      ({
        ccclass,
        property
      } = _decorator);

      _export("objectmovefast", objectmovefast = (_dec = ccclass('objectmovefast'), _dec(_class = class objectmovefast extends Component {
        start() {
          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        onBeginContact(selfCollider, otherCollider) {
          if (otherCollider.node.name === "tank0" || otherCollider.node.name === "tank1" || otherCollider.node.name === "playertank") {
            var playercontroller0 = otherCollider.getComponent(_crd && PlayerController0 === void 0 ? (_reportPossibleCrUseOfPlayerController({
              error: Error()
            }), PlayerController0) : PlayerController0);
            var playercontroller1 = otherCollider.getComponent(_crd && PlayerController1 === void 0 ? (_reportPossibleCrUseOfPlayerController2({
              error: Error()
            }), PlayerController1) : PlayerController1);

            if (playercontroller0) {
              playercontroller0.speed = 20;
            } else {
              playercontroller1.speed = 20;
            }
          } // 确保只处理一次销毁操作


          this.scheduleOnce(() => {
            if (!selfCollider.isValid) return; // 防止已销毁的对象再次操作

            selfCollider.node.destroy();
          }, 0.1); // 稍微增加延迟，确保事件处理完毕
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
//# sourceMappingURL=ba8d896a1b94dbc23e3f2cda634e72f737ef5028.js.map