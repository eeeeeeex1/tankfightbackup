System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, director, _dec, _class, _crd, ccclass, property, returnselect;

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

      _cclegacy._RF.push({}, "31057Xb6zxNa55w052cL4PE", "returnselect", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("returnselect", returnselect = (_dec = ccclass('returnselect'), _dec(_class = class returnselect extends Component {
        start() {
          this.node.on(Button.EventType.CLICK, this.loadSinglePlayerScene, this);
        }

        update(deltaTime) {}

        loadSinglePlayerScene() {
          director.loadScene('select');
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d632ebeba1e0d67c2b9171e2d8b2791b328bf10e.js.map