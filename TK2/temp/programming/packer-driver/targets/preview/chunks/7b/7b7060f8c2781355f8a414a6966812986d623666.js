System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Button, director, PassInf, user, _dec, _class2, _crd, ccclass, property, reStart;

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

      _cclegacy._RF.push({}, "6f9fcq+6SBEU5XGIVG24QBt", "reStart", undefined);

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

      _export("reStart", reStart = (_dec = ccclass('reStart'), _dec(_class2 = class reStart extends Component {
        start() {
          this.node.on(Button.EventType.CLICK, this.restart, this);
        }

        update(deltaTime) {}

        restart() {
          var Account = director.getScene().getChildByName('PassNode').getComponent(_crd && PassInf === void 0 ? (_reportPossibleCrUseOfPassInf({
            error: Error()
          }), PassInf) : PassInf).CurrentUser.Account;
          var RegSet = Object.assign(new Array(), JSON.parse(localStorage.getItem('RegSet')));

          for (var item of RegSet) {
            if (item.Account == Account) {
              item.save = 0;
              break;
            }
          }

          var json = JSON.stringify(RegSet);
          localStorage.setItem('RegSet', json);
          director.loadScene('single1');
        }

      }) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b7060f8c2781355f8a414a6966812986d623666.js.map