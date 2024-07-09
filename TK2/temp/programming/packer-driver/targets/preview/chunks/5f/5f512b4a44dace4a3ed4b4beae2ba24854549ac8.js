System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, PlayerController1, _dec, _class, _crd, ccclass, property, hp1;

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
      Component = _cc.Component;
    }, function (_unresolved_2) {
      PlayerController1 = _unresolved_2.PlayerController1;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "16f40Paa5xF74H2Eo1noFvw", "hp1", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("hp1", hp1 = (_dec = ccclass('hp1'), _dec(_class = class hp1 extends Component {
        constructor() {
          super(...arguments);
          this.tank = void 0;
        }

        start() {
          this.tank = this.node.parent.getComponentInChildren(_crd && PlayerController1 === void 0 ? (_reportPossibleCrUseOfPlayerController({
            error: Error()
          }), PlayerController1) : PlayerController1);
        }

        update(deltaTime) {
          var hp = this.tank.tanklife;
          this.node.setScale(hp, 1);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5f512b4a44dace4a3ed4b4beae2ba24854549ac8.js.map