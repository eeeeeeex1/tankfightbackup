System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Button, director, _dec, _class, _crd, ccclass, property, SceneSwitcher;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Button = _cc.Button;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9acb6G0RhtAtb61aAt1B1dA", "select", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SceneSwitcher", SceneSwitcher = (_dec = ccclass('SceneSwitcher'), _dec(_class = class SceneSwitcher extends Component {
        start() {
          // 绑定按钮点击事件
          this.node.on(Button.EventType.CLICK, this.loadSinglePlayerScene, this);
        }

        loadSinglePlayerScene() {
          director.loadScene('single'); // 使用你的单人闯关场景名称
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7ee63c9a9e29a3b987d22de292a94292f031aa6c.js.map