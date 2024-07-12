System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, background;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "acd0ehZL51I54bv8PNv/3a1", "specialwall", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Graphics', 'Color']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("background", background = (_dec = ccclass('specialwall'), _dec(_class = class background extends Component {
        constructor(...args) {
          super(...args);
          this.key = 0;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2d1addb569eda8cdb43a43caaf1d518ef09ad229.js.map