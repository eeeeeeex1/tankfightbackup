System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, director, _dec, _class, _crd, ccclass, property, _continue;

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

      _cclegacy._RF.push({}, "319e394J/RBubSNtKNYH9P6", "_continue", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("_continue", _continue = (_dec = ccclass('_continue'), _dec(_class = class _continue extends Component {
        start() {
          this.node.on(Button.EventType.CLICK, this.continue, this);
        }

        update(deltaTime) {}

        continue() {
          director.resume();
          this.node.parent.destroy();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3cb32da962fad13c09e5811a719bcdfa4df44da5.js.map