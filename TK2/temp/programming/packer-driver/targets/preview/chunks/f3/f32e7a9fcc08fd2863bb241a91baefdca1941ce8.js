System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, director, _dec, _class, _crd, ccclass, property, returnlog;

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

      _cclegacy._RF.push({}, "e5542xLZrhH/Kf4FFZU+Iq2", "returnlog", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("returnlog", returnlog = (_dec = ccclass('returnlog'), _dec(_class = class returnlog extends Component {
        start() {
          // 绑定按钮点击事件
          this.node.on(Button.EventType.CLICK, this.loadLogScene, this);
        }

        loadLogScene() {
          director.loadScene('LoginScene'); // 使用你的单人闯关场景名称
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f32e7a9fcc08fd2863bb241a91baefdca1941ce8.js.map