System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, game, _dec, _class, _crd, ccclass, property, endgame;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      game = _cc.game;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8abaeaIEoJBA75RbJC4UUyB", "endgame", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'game', 'Game', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("endgame", endgame = (_dec = ccclass('endgame'), _dec(_class = class endgame extends Component {
        start() {
          // 绑定按钮点击事件
          this.node.on(Button.EventType.CLICK, this.end, this);
        }

        end() {
          game.end();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=95ee5a4cc7b92a980a51e2f692656e7eb7a4a347.js.map