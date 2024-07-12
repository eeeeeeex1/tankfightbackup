System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, director, PassInf, user, _dec, _class2, _crd, ccclass, property, time01;

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
      find = _cc.find;
      director = _cc.director;
    }, function (_unresolved_2) {
      PassInf = _unresolved_2.PassInf;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6430b4D/PNCNrntr446tiTO", "time01", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'director']);

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

      _export("time01", time01 = (_dec = ccclass('time01'), _dec(_class2 = class time01 extends Component {
        constructor(...args) {
          super(...args);
          this.startTime = void 0;
          this.endTime = void 0;
        }

        start() {
          this.startTime = Date.now();
        }

        update(deltaTime) {
          if (!find("Canvas/background/tank/enemytank") && find("Canvas/background/tank/playertank")) {
            this.endTime = Date.now();
            let time = this.endTime - this.startTime;
            let Account = director.getScene().getChildByName('PassNode').getComponent(_crd && PassInf === void 0 ? (_reportPossibleCrUseOfPassInf({
              error: Error()
            }), PassInf) : PassInf).CurrentUser.Account;
            let RegSet = Object.assign(new Array(), JSON.parse(localStorage.getItem('RegSet')));
            let i;

            for (i = 0; i < RegSet.length; i++) {
              if (RegSet[i].Account == Account) break;
            }

            if (RegSet[i].d1time == 0) RegSet[i].d1time = time / 1000;else {
              if (RegSet[i].d1time > time / 1000) RegSet[i].d1time = time / 1000;
            }
            RegSet[i].save = 1;
            let json = JSON.stringify(RegSet);
            localStorage.setItem('RegSet', json);
            director.loadScene('victory');
          }

          if (!find("Canvas/background/tank/playertank")) director.loadScene('return');
        }

      }) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1f3c399375a94de9d0a727dff4241a12885cbf6c.js.map