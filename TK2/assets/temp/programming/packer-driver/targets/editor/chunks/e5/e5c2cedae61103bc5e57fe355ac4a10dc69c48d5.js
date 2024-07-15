System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, PlayerController0, PlayerController1, _dec, _class, _crd, ccclass, property, tankdestroy;

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
    }, function (_unresolved_2) {
      PlayerController0 = _unresolved_2.PlayerController0;
    }, function (_unresolved_3) {
      PlayerController1 = _unresolved_3.PlayerController1;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "52691WYHxxPP58dB8/QkvIV", "tankdestroy", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']); // 确保正确引入 PlayerController0 类


      // 确保正确引入 PlayerController0 类
      ({
        ccclass,
        property
      } = _decorator);

      _export("tankdestroy", tankdestroy = (_dec = ccclass('tankdestroy'), _dec(_class = class tankdestroy extends Component {
        update(deltaTime) {
          const playercontroller0 = this.node.parent.getComponent(_crd && PlayerController0 === void 0 ? (_reportPossibleCrUseOfPlayerController({
            error: Error()
          }), PlayerController0) : PlayerController0);
          const playercontroller1 = this.node.parent.getComponent(_crd && PlayerController1 === void 0 ? (_reportPossibleCrUseOfPlayerController2({
            error: Error()
          }), PlayerController1) : PlayerController1);

          if (playercontroller0.tanklife === 0 || playercontroller1.tanklife === 0) {
            this.endsence();
          }

          playercontroller0.node.getPosition;
        }

        endsence() {
          console.log('游戏结束');
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e5c2cedae61103bc5e57fe355ac4a10dc69c48d5.js.map