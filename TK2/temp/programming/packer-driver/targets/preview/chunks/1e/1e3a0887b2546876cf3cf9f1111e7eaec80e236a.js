System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Collider2D, Component, Contact2DType, PlayerController0, PlayerController1, _dec, _class, _crd, ccclass, property, enemylandmine;

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
      Collider2D = _cc.Collider2D;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      PlayerController0 = _unresolved_2.PlayerController0;
    }, function (_unresolved_3) {
      PlayerController1 = _unresolved_3.PlayerController1;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1cb8kbx01MgLnX8ZhbMQDu", "enemylandmine", undefined);

      __checkObsolete__(['__private', '_decorator', 'Collider2D', 'Component', 'Contact2DType', 'EventKeyboard', 'Input', 'input', 'instantiate', 'Node', 'Prefab']); // 确保正确引入 PlayerController0 类


      // 确保正确引入 PlayerController0 类
      ({
        ccclass,
        property
      } = _decorator);

      _export("enemylandmine", enemylandmine = (_dec = ccclass('enemylandmine'), _dec(_class = class enemylandmine extends Component {
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
          // 确保只处理一次销毁操作
          this.scheduleOnce(() => {
            if (!selfCollider.isValid) return; // 防止已销毁的对象再次操作

            selfCollider.node.destroy();
            console.log('地雷触发');
            console.log('踩中地雷的物体', otherCollider.node.name);

            if (otherCollider && otherCollider.node.parent.name !== 'mapboundary' && otherCollider.node.name !== 'tank1' && otherCollider.node.name !== 'tank0' && otherCollider.node.name !== 'enemytank') {
              otherCollider.node.destroy();
            } else if (otherCollider && otherCollider.node.name === 'tank1') {
              var playerController1 = otherCollider.node.getComponent(_crd && PlayerController1 === void 0 ? (_reportPossibleCrUseOfPlayerController2({
                error: Error()
              }), PlayerController1) : PlayerController1);

              if (playerController1) {
                playerController1.tanklife = playerController1.tanklife - 1;
                console.log(playerController1.tanklife);
                if (playerController1.tanklife === 0) otherCollider.node.destroy();
              } else {
                console.error("PlayerController0 or PlayerController1 component not found on 'tank1' node.");
              }
            } else if (otherCollider && otherCollider.node.name === 'tank0') {
              var playerController0 = otherCollider.node.getComponent(_crd && PlayerController0 === void 0 ? (_reportPossibleCrUseOfPlayerController({
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
//# sourceMappingURL=1e3a0887b2546876cf3cf9f1111e7eaec80e236a.js.map