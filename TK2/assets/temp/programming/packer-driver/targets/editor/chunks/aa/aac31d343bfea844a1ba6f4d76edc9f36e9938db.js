System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Button, director, PassInf, user, _dec, _class2, _crd, ccclass, property, SceneSwitcher;

  function _reportPossibleCrUseOfPassInf(extras) {
    _reporterNs.report("PassInf", "./PassInf", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Button = _cc.Button;
      director = _cc.director;
    }, function (_unresolved_2) {
      PassInf = _unresolved_2.PassInf;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9acb6G0RhtAtb61aAt1B1dA", "select", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button', 'director']);

      ({
        ccclass,
        property
      } = _decorator);
      user = class user {
        constructor() {
          this.Account = void 0;
          this.Password = void 0;
          this.save = void 0;
          this.difficulty = void 0;
          this.d1time1 = 0;
          this.d1time2 = 0;
          this.d1time3 = 0;
          this.d1time = 0;
          this.d2time1 = 0;
          this.d2time2 = 0;
          this.d2time3 = 0;
          this.d2time = 0;
        }

      };

      _export("SceneSwitcher", SceneSwitcher = (_dec = ccclass('SceneSwitcher'), _dec(_class2 = class SceneSwitcher extends Component {
        constructor(...args) {
          super(...args);
          this.CurrentUser = void 0;
          this.RegSet = void 0;
        }

        start() {
          // 绑定按钮点击事件,传递存档参数
          this.RegSet = Object.assign(new Array(), JSON.parse(localStorage.getItem('RegSet')));

          for (const admin of this.RegSet) {
            if (admin.Account == 'wuxu') {
              console.log('success!');
              break;
            }
          }

          this.CurrentUser = director.getScene().getChildByName('PassNode').getComponent(_crd && PassInf === void 0 ? (_reportPossibleCrUseOfPassInf({
            error: Error()
          }), PassInf) : PassInf).CurrentUser;
          this.node.on(Button.EventType.CLICK, this.loadSinglePlayerScene, this);
        }

        loadSinglePlayerScene() {
          if (this.CurrentUser.save != 0) director.loadScene('single'); // 使用你的单人闯关场景名称
          else director.loadScene('single1');
        }

      }) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aac31d343bfea844a1ba6f4d76edc9f36e9938db.js.map