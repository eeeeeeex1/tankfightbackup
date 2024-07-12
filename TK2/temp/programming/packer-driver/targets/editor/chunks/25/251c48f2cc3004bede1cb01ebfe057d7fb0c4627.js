System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, PlayerController0, _dec, _class, _crd, ccclass, property, hp0;

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
      Component = _cc.Component;
    }, function (_unresolved_2) {
      PlayerController0 = _unresolved_2.PlayerController0;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "149769Bi7JLlLfB/jgN9KNa", "hp0", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("hp0", hp0 = (_dec = ccclass('hp0'), _dec(_class = class hp0 extends Component {
        constructor(...args) {
          super(...args);
          this.tank = void 0;
        }

        start() {
          this.tank = this.node.parent.getComponentInChildren(_crd && PlayerController0 === void 0 ? (_reportPossibleCrUseOfPlayerController({
            error: Error()
          }), PlayerController0) : PlayerController0);
        }

        update(deltaTime) {
          let hp = this.tank.tanklife;
          this.node.setScale(hp, 1);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=251c48f2cc3004bede1cb01ebfe057d7fb0c4627.js.map