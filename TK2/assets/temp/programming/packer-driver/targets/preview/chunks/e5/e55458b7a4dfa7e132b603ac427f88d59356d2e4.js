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

      _cclegacy._RF.push({}, "78d2auIqe1HD4ooYfew29tR", "endgame", undefined);

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
//# sourceMappingURL=e55458b7a4dfa7e132b603ac427f88d59356d2e4.js.map