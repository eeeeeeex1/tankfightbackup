System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, director, _dec, _class, _crd, ccclass, property, easy;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1c2aaCrB6FNB5vfyyN+X1C0", "easy", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("easy", easy = (_dec = ccclass('easy'), _dec(_class = class easy extends Component {
        start() {
          this.node.on(Button.EventType.CLICK, this.easymode, this);
        }

        update(deltaTime) {}

        easymode() {
          director.loadScene('alonemap0');
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2293fa9ab01540ca40b9eaf4f350d7045e60f8e2.js.map