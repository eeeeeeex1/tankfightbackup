System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Collider2D, Component, Contact2DType, PlayerController0, _dec, _class, _crd, ccclass, property, landmine1;

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController0", "./tank0", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Collider2D = _cc.Collider2D;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      PlayerController0 = _unresolved_2.PlayerController0;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a45aeLDPmdLxbUaQFne33wQ", "landmine1", undefined);

      __checkObsolete__(['__private', '_decorator', 'Collider2D', 'Component', 'Contact2DType', 'EventKeyboard', 'Input', 'input', 'instantiate', 'Node', 'Prefab']);

      // 确保正确引入 PlayerController0 类
      ({
        ccclass,
        property
      } = _decorator);

      _export("landmine1", landmine1 = (_dec = ccclass('landmine1'), _dec(_class = class landmine1 extends Component {
        onLoad() {
          // 调用定时销毁方法
          this.scheduleDestroy();
        }

        scheduleDestroy() {
          // 使用 scheduleOnce 方法，在 5 秒后销毁节点
          this.scheduleOnce(() => {
            this.node.destroy();
          }, 10);
        }

        start() {
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        onBeginContact(selfCollider, otherCollider) {
          // 确保只处理一次销毁操作
          this.scheduleOnce(() => {
            if (!selfCollider.isValid) return; // 防止已销毁的对象再次操作

            selfCollider.node.destroy();

            if (otherCollider && otherCollider.node.name === 'tank0') {
              let playerController0 = otherCollider.node.getComponent(_crd && PlayerController0 === void 0 ? (_reportPossibleCrUseOfPlayerController({
                error: Error()
              }), PlayerController0) : PlayerController0);

              if (playerController0) {
                playerController0.tanklife = playerController0.tanklife - 1;
                console.log(playerController0.tanklife);
                if (playerController0.tanklife === 0) otherCollider.node.destroy();
              } else {
                console.error("PlayerController0 or PlayerController1 component not found on 'tank1' node.");
              }
            }
          }, 0.01); // 稍微增加延迟，确保事件处理完毕
        }

        onDestroy() {
          let collider = this.getComponent(Collider2D);

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
//# sourceMappingURL=b5a3cb1bfa28802874cb7bb5fef8631039733854.js.map