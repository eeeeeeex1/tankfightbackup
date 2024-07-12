System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, director, _dec, _class, _crd, ccclass, property, hard;

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

      _cclegacy._RF.push({}, "62e26+aUI9KuI18beVHFBW9", "hard", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("hard", hard = (_dec = ccclass('hard'), _dec(_class = class hard extends Component {
        start() {
          this.node.on(Button.EventType.CLICK, this.easymode, this);
        }

        update(deltaTime) {}

        easymode() {
          director.loadScene('alonemap0-difficult');
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c45c38bb2ce35a2b17aaaa5a8b6504bbb2e042ac.js.map