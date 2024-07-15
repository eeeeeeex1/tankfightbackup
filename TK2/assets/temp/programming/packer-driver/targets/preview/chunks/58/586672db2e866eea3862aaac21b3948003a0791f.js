System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Collider2D, Component, Contact2DType, PlayerController1, _dec, _class, _crd, ccclass, property, landmine0;

  function _reportPossibleCrUseOfPlayerController(extras) {
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
      Collider2D = _cc.Collider2D;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      PlayerController1 = _unresolved_2.PlayerController1;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88fa81yu0NIJ6sEdkL6y4bu", "landmine0", undefined);

      __checkObsolete__(['__private', '_decorator', 'Collider2D', 'Component', 'Contact2DType', 'EventKeyboard', 'Input', 'input', 'instantiate', 'Node', 'Prefab']);

      // 确保正确引入 PlayerController0 类
      ({
        ccclass,
        property
      } = _decorator);

      _export("landmine0", landmine0 = (_dec = ccclass('landmine0'), _dec(_class = class landmine0 extends Component {
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
          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        onBeginContact(selfCollider, otherCollider) {
          this.scheduleOnce(() => {
            if (!selfCollider.isValid) return; // 防止已销毁的对象再次操作

            selfCollider.node.destroy();

            if (otherCollider && otherCollider.node.name === 'tank1') {
              var playerController1 = otherCollider.node.getComponent(_crd && PlayerController1 === void 0 ? (_reportPossibleCrUseOfPlayerController({
                error: Error()
              }), PlayerController1) : PlayerController1);

              if (playerController1) {
                playerController1.tanklife = playerController1.tanklife - 1;
                console.log(playerController1.tanklife);
                if (playerController1.tanklife === 0) otherCollider.node.destroy();
              } else {
                console.error("PlayerController0 or PlayerController1 component not found on 'tank1' node.");
              }
            }

            if (otherCollider && otherCollider.node.name === 'enemytank' || otherCollider && otherCollider.node.name === 'enemytank-001' || otherCollider && otherCollider.node.name === 'enemytank-002') {
              otherCollider.node.destroy();
            }
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
//# sourceMappingURL=586672db2e866eea3862aaac21b3948003a0791f.js.map