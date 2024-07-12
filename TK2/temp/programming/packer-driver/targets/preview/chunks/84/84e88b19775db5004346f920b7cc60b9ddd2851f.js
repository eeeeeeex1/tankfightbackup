System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, _dec, _class, _crd, ccclass, property, shut;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eeb3cX9FqJO/JPS53Ld5/1y", "shut", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("shut", shut = (_dec = ccclass('shut'), _dec(_class = class shut extends Component {
        start() {
          this.node.on(Button.EventType.CLICK, this.shutdown, this);
        }

        update(deltaTime) {}

        shutdown() {
          this.node.parent.destroy();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=84e88b19775db5004346f920b7cc60b9ddd2851f.js.map